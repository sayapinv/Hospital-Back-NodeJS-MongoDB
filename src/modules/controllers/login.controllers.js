const User = require('../../db/models/user');
const bcryptjs = require('bcryptjs')
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const user = require('../../db/models/user');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');

const secret = "SECRET_KEY"

const generateAccessToken = (generateId) => {
  
  const payload = {id:generateId}

  
  return jwt.sign( payload ,secret , {expiresIn:'24h'} )
}




module.exports.createNewAccount = (req, res)=> {

  const generateId = uuid.v1()

  const errors = validationResult(req)

  const body = req.body;

  if (errors.isEmpty()){

    User.findOne({ login:body.login }).then(result => {
      

      if(result === null){
  
        const hashPass = bcryptjs.hashSync(body.password, 7);

        const user = new User({
  
          login: body.login,
          password: hashPass,
          number: generateId
  
        });
  
        user.save().then(result => {

          User.find().then(result => {

            const token = generateAccessToken(generateId)
          
            res.json({token})
  
          })
        })
  
      }
  
    })

  }else{

    res.send(errors)

  }

};

module.exports.loginAccount = (req, res) => {

  const {login,password} = req.body;

  const errors = validationResult(req)

  if (errors.isEmpty()){

    User.findOne({login:login}).then(result =>{

      if (result !== null){
        
        let validPass = bcrypt.compareSync(password,result.password);

        if(validPass){
          
          const token = generateAccessToken(result.number);

          res.json({token})
  
        }else{
  
          res.send({massage: 'не верный пароль'})
  
        }
        
      }else{
        res.send({massage: `Пользователь ${login} не найден`})
      }
  
    })

  }else{
    res.send(errors)
  }

  

}


