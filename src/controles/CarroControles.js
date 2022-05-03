// responsavel pelo controle do api
// tudo que for do banco de dados vai ser jogado no carroService

const CarroService = require('../services/CarroService');
const carroService = require('../services/CarroService');

module.exports = {
    buscartodos: async (req, res)=>{
        let json = {error: '', result:[]};
        let carros = await carroService.buscarTodos();
        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }
        res.json(json);
    },
    buscarUm: async(req, res) =>{
        let json = {error: '', result:{}};

        let codigo = req.params.codigo;
        let carro = await CarroService.buscarUm(codigo);

        if(carro){
            json.result = carro;
        }
        res.json(json);
    },

    inserir: async(req, res) =>{
        let json = {error: '', result:{}};
        
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa){
            let CarroCodigo = await CarroService.inserir(modelo, placa);
            json.result = {
                codigo: CarroCodigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados'; 
        }

        res.json(json);
    },

    alterar: async(req, res)=> {
        let json = {error: '', result:{}}

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa && codigo){
            await CarroService.alterar(modelo, placa, codigo);
            json.result = {
                codigo,
                modelo,
                placa
            };
        }else {
            json.error = 'campos não enviado';
        }
        res.json(json);
    },
    excluir: async(req, res) =>{
        let json = {error:'', result:{}}

        await carroService.excluir(req.params.codigo);

        res.json(json);
    }
}

