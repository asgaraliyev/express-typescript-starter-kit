import { Application } from 'express';
import cors from 'cors';
import config from '../config';
import morgan from 'morgan';
const middlewares = {
  init(app: Application) {
    app.use(cors(config.cors));
    app.use(morgan('dev'));
  },
};
export default middlewares;
