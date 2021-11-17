import  from 'dotenv';
import express from 'express';
import cors from 'cors';
import './databases'
import routes from './routes';
import config from './config/server';

const app = express();
const port = config.server.port;

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333, () => console.log('Server started.'))

