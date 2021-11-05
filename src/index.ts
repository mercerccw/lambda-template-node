import express from 'express';
import { anotherHello } from './models/hello';

const handler = async (_event: any = {}): Promise<any> => {
  const responseMessage = 'Hello, World!';
  console.log(anotherHello());
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  };
};

if (process.env.isLambda) {
  module.exports.handler = handler;
} else {
  const app = express();
  const port = 8080;

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.get('/api/info', (req, res) => {
    res.send({ application: 'sample-app', version: '1.0' });
  });
  app.post('/api/v1/getback', (req, res) => {
    res.send({ ...req.body });
  });
  app.listen(port, () => console.log(`Listening on: ${port}`));
}
