const Reception = require('../../db/models/reseption');
const User = require('../../db/models/user');
const jwt = require('jsonwebtoken');

const secret = "SECRET_KEY"

module.exports.createReseption = (req,res) => {

    const id = jwt.verify( req.body.token , secret )
    
    const reception = new Reception({
  
        name: req.body.name,
        doctor: req.body.doctor,
        date: req.body.date,
        complaint: req.body.complaint,
        number: id.id

    });

    reception.save().then(result => {

        
        Reception.find().then(result => {
            res.send({data: result});
          });

    })

}

module.exports.getReceptions = (req,res) => {

    Reception.find().then(result => {
        
        res.send({data: result});
      });

}

