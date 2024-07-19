import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';

const app = express();
app.use(bodyParser.json());

app.use(routes);

app.listen(3000, () => {
    console.log('Slot game API running on port 3000');
});

