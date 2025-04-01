const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'rootpassword',
  database: 'testdb'
});

db.connect(err => {
  if (err) {
    console.error('Lỗi kết nối MySQL:', err);
  } else {
    console.log('Kết nối MySQL thành công!');
  }
});
app.get('/', (req, res) => {
  res.send('Node.js & MySQL chạy trên Docker!');
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
