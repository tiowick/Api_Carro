const express = require('express');  
const router = express.Router();

const carroControles = require('./controles/CarroControles');

router.get('/carros', carroControles.buscartodos); 
router.get('/carro/:codigo', carroControles.buscarUm);
router.post('/carro', carroControles.inserir);
router.put('/carro/:codigo', carroControles.alterar);
router.delete('/carro/:codigo', carroControles.excluir);

module.exports = router;