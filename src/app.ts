import '../config/app.ts';
import express, { Application, Request, Response } from 'express';
import config from '../config';
console.log('config', config);
const app: Application = express();

const port: number = 3001;

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
