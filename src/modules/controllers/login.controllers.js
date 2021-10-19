const User = require('../../db/models/user');
const bcryptjs = require('bcryptjs')
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const user = require('../../db/models/user');
const jwt = require('jsonwebtoken');

const secret = "SECRET_KEY"

const generateAccessToken = (id) => {

  const payload = {id:id}
 
  return jwt.sign( payload,secret,{expiresIn:'24h'} )
}

module.exports.createNewAccount = (req, res)=> {

  const errors = validationResult(req)

  const body = req.body;

  if (errors.isEmpty()){

    User.findOne({ login:body.login }).then(result => {

      if(result === null){
  
        const hashPass = bcryptjs.hashSync(body.password, 7);
  
        const user = new User({
  
          login: body.login,
          password: hashPass
  
        });
  
        user.save().then(result => {
  
          User.find().then(result => {
            
            const token = generateAccessToken(body._id)
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

        if(!validPass){

          res.send({massage: 'не верный пароль'})
          
          // const token = generateAccessToken(result._id);
          // res.json({token})
          // const decoded = jwt.verify( token,secret )
          // console.log(decoded)
  
        }else{
  
          res.send({massage:"true"})
  
        }
        
      }else{
        res.send({massage: `Пользователь ${login} не найден`})
      }
  
    })

  }else{
    res.send(errors)
  }

  

}
