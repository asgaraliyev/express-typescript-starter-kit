import { Application } from 'express';
import cors from 'cors';
import config from '../config';
const middlewares = {
  init(app: Application) {
    app.use(cors(config.cors));
  },
};
export default middlewares;
