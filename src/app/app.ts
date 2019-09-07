import express from 'express';

const app: express.Application = express();
const port = 3001;

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next();
});

app.get('/', (req: any, res: any) =>
  res.send('Hello World!')
);

app.post('/', function (req, res) {
  res.send('Got a POST request')
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
});
