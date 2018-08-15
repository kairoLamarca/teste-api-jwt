var Model = require('./ModelUsuario');
module.exports = (req, res) => {
    let data = new Model({
        username: req.body.username,
        password: req.body.password
    });
    data.save((err) => {
        if (err)
            res.send(err);
        res.json({ message: 'Novo Usuário', data: data });
    });
};