// Conectando com o banco de dados

const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'moura2007', {
    host: "localhost",
    dialect: "mysql"
})

//Montando tabelas de postagem
const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING   
    },

    conteudo: {
        type: Sequelize.TEXT
    }
})

//Criando uma postagens
Postagem.create({
    titulo: "UM TITULO RANDOM",
    conteudo: "DKAJSDAJSKJDASLHDASHDJASHASHDJAHSJ"
})

//Montando tabelas de usuarios
const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    
    sobrenome:{
        type: Sequelize.STRING
    },

    idade: {
        type: Sequelize.INTEGER
    },

    email:{
        type: Sequelize.STRING
    }    
})
//Criando uma Usuario

Usuario.create({
    nome: "kyoto",
    sobrenome: "Split",
    idade: 35,
    email: "teste@mail.com"
})


//Usuario.sync({force: true})









