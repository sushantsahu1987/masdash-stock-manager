const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const url = "mongodb://root:lenny1987@localhost:27017/graphdb";
// mongodb://<dbuser>:<dbpassword>@ds129333.mlab.com:29333/logger_db
const url = "mongodb://mongo:27017/graphdb";
const app = express();
app.use(bodyParser.json());

mongoose.connect(url, { useNewUrlParser: true })
.then(() => {
  console.log('Database connection successful')
})
.catch(err => {
  console.log(err)
  console.error('Database connection error')
})

app.post('/data',(req, resp)=> {
    const doc = req.body;
    // Add to mongodb
    resp.send({data: doc, message: "added successfully"});
});

app.get('/data',(req, resp)=> {
    resp.send({name: "sushant"});
});

app.listen(5000, () => {
    console.log('server running at port 5000!');
})