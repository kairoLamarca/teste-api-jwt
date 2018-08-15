module.exports = {
    getUsuarios: function (req, res) {
        res.json({ message: "rota para GET do /usuarios" })
    },
    postUsuarios: require('./controllerCriaUsuario'),
    login: require('./controllerLogin')
}

// class Rotas {
//     getUsuarios(req, res) {
//         res.json({ message: "rota para GET do /usuarios" });
//     }

//     get postUsuarios(req, res) {
//         res.json({ message: "rota para POST do /usuarios" })
//     }

//     get login(req, res) {
//         res.json({ message: 'rota de login' })
//     }
// }

// module.exports = Rotas;
