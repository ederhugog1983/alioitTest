// const http = require("http");
const express = require('express');
const https = require('https');
const cors = require('cors');
const { emitWarning } = require('process');
const app = express();
const port = process.env.PORT;
require('dotenv').config()
//body parser
const bodyParser = require('body-parser')
//DB connection
const mongoose = require('mongoose')
const uri = `mongodb+srv://${process.env.USER_MONGO}:${process.env.PASS_MONGO}
@alloittest.xvdrwdd.mongodb.net/${process.env.DB_MONGO}?retryWrites=true&w=majority`
mongoose.connect( uri ,{useNewUrlParser: true, useUnifiedTopology: true}
  ).then((c)=> console.log('db connection success'))
  .catch( e=> console.log('EXCEP:', e))  


// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

app.use(express.json({
  limit: process.env.SRV_MAX_BODY_SIZE
}));
app.use(cors())
app.set('port', port || 3000);

app.use(express.json());
app.use(express.json({limit: '50mb'}));

//added routes 
app.use('/api/poke',require('./routes/poke/pokeRoutes'))

https.createServer((req, res) => {
  fs.readFile('index.html', 'utf-8', (err, content) => {
    if (err) {
       console.log(err)
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
})
app.listen(app.get('port'), () => {
  console.log(`Server running at port`, app.get('port'));
});