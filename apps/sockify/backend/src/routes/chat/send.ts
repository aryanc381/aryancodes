import { WebSocket, WebSocketServer } from "ws";

const onlineUsers = new Map<number, WebSocket>();

export function setup(wss: WebSocketServer) {
    const sender = 7;
    wss.on('connection', (socket) => {
        onlineUsers.set(sender, socket)
        console.log('User connected.');
        setInterval(() => {
            socket.send('Current Profit of aryan company is ' + Math.random());
        }, 2000);

        socket.on('message', (e) => {
            console.log(e.toString());
        });

        socket.on("close", () => {
            console.log('User disconnected.');
        });
    });
}