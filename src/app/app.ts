import express from 'express';
import { connection } from './database';

const app: express.Application = express();
const port = 3001;

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next();
});

app.get('/', (req: any, res: any) => {
  testConnection();
  return res.send('Hello World!');
});

app.post('/', function (req, res) {
  res.send('Got a POST request')
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
});

function testConnection() {
  connection.connect();
  connection.query('SELECT name FROM user', function (err, rows, fields) {
    if (err) {
      throw err;
    }
    console.log('rows', rows.map((r: User) => r.name).join(', '));
  });
  connection.end();
}

interface User {
  name: string;
}