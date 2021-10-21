const Reception = require('../../db/models/reseption');
// const reseption = require('../../db/models/reseption');
const jwt = require('jsonwebtoken');

const secret = "SECRET_KEY"

module.exports.createReseption = (req,res) => {

    const id = jwt.verify( req.body.token , secret )

    const reception = new Reception({
  
        name: req.body.name,
        doctor: req.body.doctor,
        date: req.body.date,
        complaints: req.body.complaints,
        number: id.id

    });

    reception.save().then(result => {

        console.log(result)

    })

}