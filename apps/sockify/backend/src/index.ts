import express  from "express";
import cors from 'cors'
import rootRouter from './routes/root.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/v1/api', rootRouter);

app.listen(5000, () => { console.log('App is listenng at PORT-5000.'); });