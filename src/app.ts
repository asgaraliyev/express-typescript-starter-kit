import express, { Application, Request, Response } from 'express';
import config from './config';
import utils from './utils';
const app: Application = express();

const port = config.env.PORT;
utils.middlewares.init(app);
app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
