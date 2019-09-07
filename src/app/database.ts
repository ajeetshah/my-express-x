import mysql from 'mysql';
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'iamajeets',
  password: 'password',
  database: 'my_db_x'
});
