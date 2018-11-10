import express from 'express';
import bodyParser from 'body-parser';
const app = express();

const port = parseInt(process.env.PORT) || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(port, (err){
    console.log('server started on port ' + port)
});

