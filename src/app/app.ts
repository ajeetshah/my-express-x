import express from 'express';

const app: express.Application = express();
const port = 4000;

app.get('/', (req: any, res: any) =>
  res.send('Hello World!')
);

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
