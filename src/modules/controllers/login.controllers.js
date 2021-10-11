const Login = require('../../db/models/login/index');

// module.exports.getAllTasks = (req, res)=>{
//   Task.find().then(result => {
//     res.send({data: result});
//   });
// };

module.exports.createNewAccount = (req, res)=> {

  const body = req.body;
  
  const login = new Login({

    login: body.login,
    pass: body.pass

  });
  
  login.save().then(result => {
    Login.find().then(result => {
      res.send({data: result})
    })
  })


  // if (body.hasOwnProperty('text') && body.hasOwnProperty('isCheck')) {
  //   const task = new Task({
  //     text: body.text,
  //     isCheck: body.isCheck
  //   });
  //   task.save().then(result => {
  //     Task.find().then(result => {
  //       res.send({data: result});
  //     });
  //   });
  // }
};

// module.exports.deleteTask = (req, res)=> {
//   if (!req.query.id) return res.status(422).send('Error! Params not correct');
//     Task.deleteOne({_id: req.query.id}).then(result => {
//       Task.find().then(result => {
//         res.send({data: result});
//       });
//     });
// };

// module.exports.changeTaskInfo = (req, res)=> {
//   const body = req.body;
//   if (body.hasOwnProperty('_id') && (body.hasOwnProperty('text') || body.hasOwnProperty('isCheck'))) {
//     Task.updateOne({_id: body._id}, body).then(result =>{
//       Task.find().then(result => {
//         res.send({data: result});
//       });
//     })
//   } else {
//     res.status(422).send('Error! Params not correct');
//   }
// };