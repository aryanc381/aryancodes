import express  from "express";
import cors from 'cors'
import rootRouter from './routes/root.js';
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
);
app.use(cookieParser());
app.use(express.json());

app.use('/v1/api', rootRouter);

app.listen(5000, () => { console.log('App is listening at PORT-5000.'); });