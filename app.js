const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = parseInt(process.env.PORT) || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(port, function(){
    console.log('server started on port ' + port)
});

