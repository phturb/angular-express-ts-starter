import 'reflect-metadata';

import { json, urlencoded} from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { Application } from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './inversify.config';
import './controller/index.controller';

dotenv.config();

const server = new InversifyExpressServer(container);
server.setConfig((app: Application) => {
    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(cors());
});

const application = server.build();
const port = process.env.SERVER_PORT;

application.listen(port);
console.log(`Server started at http://localhost:${ port }`);
console.log('ITS HACKING TIME');

export = module.exports = application;
