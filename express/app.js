
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const Post = require('../models/Post.js');
const { ForeignKeyConstraintError } = require('sequelize');


// Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        }
    }))
    app.set('view engine', 'handlebars')

    //Definindo caminho certo para o formulario
    app.set('views', 'C:\\Users\\kyoto\\Documents\\app\\views')

    //Body Parse
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())


//Rotas
    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            const simplePost = posts.map(post => post.get({plain: true}));
            res.render('home', {posts: simplePost})
        })
        
    })

    app.get('/cad', function(req, res){
        res.render('form');
    })

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: "+ erro)
        })
    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send('Postagem deletada com sucesso')
        }).catch(function(erro){
            res.send('Esta postagem não existe!')
        })
    })


app.listen(8081, function(){
    console.log("Servidor Rodando na URL: http://localhost:8081");
});
