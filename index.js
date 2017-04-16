const express = require('express');

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public/views'));
app.listen(port, ()=>{
  console.log(`App running at port ${port}`);
})
