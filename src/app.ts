import express, { Application, Request, Response } from 'express';
import config from './config';
const app: Application = express();

const port = config.env.PORT;

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
