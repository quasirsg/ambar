//Load files library

var fs = require('fs');
var path = require('path');

exports.generarTokenPaypal = async(req,res)=>{

    return res.status(200).send({
        status : 'success',
        message : 'Generando Token'
    });
};
