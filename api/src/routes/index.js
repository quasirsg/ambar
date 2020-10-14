const express = require('express');  //Cargar framework de nodejs
const router = express.Router();  //Cargar nucleo router

//Importar controlador
router.get('/users',(req,res)=>{
    return res.status(200).send({
        status : 'success',
        message : 'Generando Token'
    });
})

module.exports = router;