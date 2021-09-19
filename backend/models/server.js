const express = require('express');
const cors = require('cors');

const { SocketController } = require('../sockets/socket_controller');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server, {
            cors: {
              origin: "*",
            //   methods: ["GET", "POST"],
            //   allowedHeaders: ["my-custom-header"],
            //   credentials: true
            }
          });

        // ROUTES
        this.paths = {
            auth: '/api/auth',
            users: '/api/users',
            monsters: '/api/monsters',
            teams: '/api/teams',
            items: '/api/items',
            skills: '/api/skills',
            games: '/api/games',
            chats: '/api/chats',
            shop: '/api/shop',
        }

        // Conectar a la BBDD

        // MIDDLEWARES
        this.middlewares();

        // RUTAS
        this.routes();

        // SOCKETS
        this.sockets()

    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/auth.routes'))
        this.app.use(this.paths.users, require('../routes/user.routes'))
        this.app.use(this.paths.monsters, require('../routes/monsters.routes'))
        this.app.use(this.paths.teams, require('../routes/teams.routes'))
        this.app.use(this.paths.items, require('../routes/items.routes'))
        this.app.use(this.paths.skills, require('../routes/skills.routes'))
        this.app.use(this.paths.games, require('../routes/games.routes'))
        this.app.use(this.paths.chats, require('../routes/chats.routes'))
        this.app.use(this.paths.shop, require('../routes/shop.routes'))
    }

    sockets() {
        this.io.on('connection', (socket) => SocketController(socket, this.io))
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT)
        })
    }

}

module.exports = Server;