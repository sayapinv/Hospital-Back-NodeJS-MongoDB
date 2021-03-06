const Reception = require('../../db/models/reseption');
const jwt = require('jsonwebtoken');
const {secret} = require('../../config.js')

module.exports.createReseption = (req,res) => {

    const decoded = jwt.verify( req.body.token , secret )

    const reception = new Reception({
  
        name: req.body.name,
        doctor: req.body.doctor,
        date: req.body.date,
        complaint: req.body.complaint,
        number: decoded.id

    });

    reception.save().then(result => {
        Reception.find({number:decoded.id}).then(result => {

            res.send({data: result});

        });

    })

}

module.exports.getReceptions = (req,res) => {

    const token = req.query.token

    const decoded = jwt.verify( token, secret );
    
    Reception.find({number:decoded.id}).then(result => {
        
        res.send({data:result})
    
      });

}

module.exports.deleteReception = (req,res) => {

    Reception.deleteOne({ _id:req.query.id }).then(result => {
        Reception.find({number:req.query.number}).then(result =>{
            res.send({data: result});
        })
    })
}

module.exports.updateReception = (req,res) => {

    Reception.updateOne({_id: req.body.id}, req.body).then(result =>{
        
        Reception.find({number:req.body.number}).then(result =>{
            
             res.send({data: result});

        })

    })
}


