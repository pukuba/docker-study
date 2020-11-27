const express = require('express')
const port = 3000; //3000번 포트
var uuid = require('uuid');
const host = '0.0.0.0';
const app = express();
app.get('/', (req, res) => {
  res.send(`hello ${uuid}`)
});
app.listen(port, host);
console.log(`
    server start http://localhost:${port}/
`)