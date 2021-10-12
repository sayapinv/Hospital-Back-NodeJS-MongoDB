const User = require('../../db/models/user');
const bcryptjs = require('bcryptjs')

module.exports.createNewAccount = (req, res)=> {

  const body = req.body;

  const oldUser = User.findOne({ login:body.login }).then(result => {
    console.log(result)
  })



  const hashPass = bcryptjs.hashSync(body.password, 7);

  const user = new User({

    login: body.login,
    password: hashPass

  });

  user.save().then(result => {
    User.find().then(result => {
      res.send({data: result})
    })
  })



};
