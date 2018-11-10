import express from 'express';
import { json, urlencoded } from 'body-parser';
const app = express();

const port = parseInt(process.env.PORT) || 8080;

app.use(json());
app.use(urlencoded({extended:false}));

app.listen(port, function(){
    console.log('server started on port ' + port)
});

