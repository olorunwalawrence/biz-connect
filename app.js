/* eslint-disable no-console */
import express from 'express';
import { json, urlencoded } from 'body-parser';
const app = express();
import routes from './server/routes/biz.routes';

const port = parseInt(process.env.PORT) || 8080;

app.use(json());
app.use(urlencoded({extended:false}));

app.get('/', (req,res) => res.status(200).send({
  message:'this is the app home page',
}));
app.use('/',routes);
app.listen(port, function(){
  console.log('server started on port ' + port);
});

export default app;
