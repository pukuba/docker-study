var express = require('express');
var app = express();
app.get('/',(req,res)=>{
  res.send(`run`)
})
app.listen(3000,'0.0.0.0')