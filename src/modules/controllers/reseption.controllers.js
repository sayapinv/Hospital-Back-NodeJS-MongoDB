const Reception = require('../../db/models/reseption');
const User = require('../../db/models/user');
const jwt = require('jsonwebtoken');

const secret = "SECRET_KEY"

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

        
        Reception.find().then(result => {

            res.send({data: ReceptionGetFilter(result,decoded.id)});

        });

    })

}

module.exports.getReceptions = (req,res) => {

    const token = req.query.token

    const decoded = jwt.verify( token, secret );
    
    Reception.find().then(result => {
        
        res.send({data:ReceptionGetFilter(result,decoded.id)})
        

      });

}

const ReceptionGetFilter = (arr,dec) => {//фильтр по id
    const newArr = []
    arr.forEach(element => {
        if(element.number === dec){
            newArr.push(element)
        }
    });
    return newArr;
}

module.exports.deleteReception = (req,res) => {

    Reception.deleteOne({ _id:req.query.id }).then(result => {
        console.log(result)
    })
}

// Task.deleteOne({_id: req.query.id}).then(result => {
//     Task.find().then(result => {
//       res.send({data: result});
//     });
//   });

