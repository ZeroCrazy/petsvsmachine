const express = require('express');
const cors = require('cors');

const { SocketController } = require('../sockets/socket_controller');
const { weatherEvent } = require('../jobs');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.cron = require('node-cron');
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
            pet: '/api/pets',
            shop: '/api/shop',
            player: '/api/player',
            land: '/api/lands',
            farm: '/api/farm',
        }

        // Conectar a la BBDD

        // MIDDLEWARES
        this.middlewares();

        // RUTAS
        this.routes();

        // SOCKETS
        this.sockets();

        // CRONTAB
        this.cronjobs();

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
        this.app.use(this.paths.auth, require('../routes/auth.routes'));
        this.app.use(this.paths.pet, require('../routes/pets.routes'));
        this.app.use(this.paths.shop, require('../routes/shop.routes'));
        this.app.use(this.paths.player, require('../routes/player.routes'));
        this.app.use(this.paths.land, require('../routes/land.routes'));
        this.app.use(this.paths.farm, require('../routes/farm.routes'));
    }

    sockets() {
        this.io.on('connection', (socket) => SocketController(socket, this.io))
    }

    cronjobs() {
        // this.cron.schedule('* * * * *', () => {
        //     console.log('running a task every minute');
        //   });
        this.cron.schedule('*/20 * * * *', () => {
            console.log('running a task every 20minute');
            weatherEvent();
        });
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT)
        })
    }

}

module.exports = Server;