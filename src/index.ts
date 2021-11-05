import express from 'express';
import serverless from 'serverless-http';
import { healthCheck, randomEmoji } from './controllers';

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/health', (req, res) => {
  res.send({ health: healthCheck().health, version: '1.0' });
});
app.get('/api/v1/emoji', (req, res) => {
  res.send({ emoji: randomEmoji(), version: '1.0' });
});
app.post('/api/v1/echo', (req, res) => {
  res.send({ ...req.body });
});

if (process.env.isLambda) {
  module.exports.handler = serverless(app);
} else {
  app.listen(port, () => console.log(`Listening on: ${port}`));
}
