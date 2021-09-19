const { validateJWTSocket } = require("../middlewares/validatorJWT")
const { setOnline, setOffline } = require("../controllers/user_controller")
const { finshGame } = require("../controllers/games_controller")

const Sockets = {
    socket: null,
    io: null
}

const SocketController = (socket, io) => {
    Sockets.socket = socket;
    Sockets.io = io;

    // Guardar usuario como online al conectarse
    const uid = validateJWTSocket(socket.handshake.headers['x-token']);
    if (!uid) return socket.disconnect;

    // Conectar a sala especial
    socket.join(uid)

    setOnline(uid)
    io.emit('userConnected', uid);

    // Limpiar cuando se desconecte
    socket.on('disconnect', () => {
        setOffline(uid)
        io.emit('userDisconnected', uid);
        console.log('disconnect: ', uid);
    })

    // Chat
    socket.on('sendMsg', ({ reciver_id, message }, callback) => {

        console.log('recibed: ', { reciver_id, message });
        const data = {
            "sender_id": uid,
            "reciver_id": reciver_id,
            "message": message,
            "date": new Date
        }
        // io.emit('recivedMsg', uid);
        socket.to(reciver_id).emit('recivedMsg', data);
        socket.to(reciver_id).emit('chatList', uid);
        // io.emit('recivedMsg', data);
    })


}

module.exports = {
    SocketController,
    Sockets
}