import express, { Application } from 'express';
import cors from 'cors';
import config from '../config';
import morgan from 'morgan';
const middlewares = {
  init(app: Application) {
    app.use(cors(config.cors));
    app.use(morgan('dev'));
    app.use(express.json());
  },
};
export default middlewares;
