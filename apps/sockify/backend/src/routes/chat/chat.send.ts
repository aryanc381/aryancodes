import type { WebSocketServer, WebSocket } from "ws";

const clients = new Map<string, WebSocket>();

export function chat(wss: WebSocketServer) {
    wss.on('connection', (socket, req) => {
        const params = new URLSearchParams(req.url?.split("?")[1]);
        const user_id = params.get('user_id');
        if(!user_id) {
            socket.close(1008, 'user_id required.');
        }

        clients.set(user_id!, socket);
        console.log(`User connected : ${user_id}.`);

        socket.on('close', () => {
            clients.delete(user_id!);
            console.log(`User disconnected: ${user_id}.`);
            return;
        });

        socket.on('message', (data) => {
            const msg = JSON.parse(data.toString())
            const target_socket = clients.get(msg.to);
            if(!target_socket) {
                socket.send(
                    JSON.stringify({
                        error: `User ${msg.to} is not connected.`,
                    })
                );
                return;
            }

            target_socket.send(
                JSON.stringify({ from: user_id, payload: msg.payload })
            )
        })
    })
}