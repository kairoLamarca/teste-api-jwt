const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , mongoose = require('mongoose')
    , jwt = require('jwt-simple');

const db = 'mongodb://localhost/teste-jwt';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const router = express.Router();

app.use('/api', router);

/*Aqui criaremos as rotas*/
const rotas = require('./rotas')
router.route('/usuarios')
    .get(require('./validarJWT'), rotas.getUsuarios)
    .post(rotas.postUsuarios);
router.route('/login')
    .post(rotas.login);

mongoose.connect(db);

app.listen(port);

console.log('conectado a porta ' + port);