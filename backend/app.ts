import express, { Application } from 'express';
import * as dotenv from "dotenv";
import cors from "cors";
import {connectDb} from "./db/dbConnection";
import bodyParser from 'body-parser';
import { routes } from './routes/routes';

dotenv.config();

const app: Application = express();

const port = process.env.PORT;

// Middlewares
app.use(express.json())
app.use(cors())

// body-parser
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use('/api/v1', routes);

const server = () => {
    connectDb()
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
}

server()