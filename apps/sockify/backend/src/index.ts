import express  from "express";
import cors from 'cors'
import rootRouter from './routes/root.js';
import cookieParser from "cookie-parser";
import http from 'http';
import { WebSocketServer } from "ws";
import { chat } from "./routes/chat/send.js";

const app = express();
const server = http.createServer(app);

export const wss = new WebSocketServer({ server });
await chat(wss);
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
);
app.use(cookieParser());
app.use(express.json());

app.use('/v1/api', rootRouter);

server.listen(5000, () => { console.log('Backend + WS running on PORT-5000')});