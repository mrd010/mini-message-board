import express from 'express';
import path from 'path';
import { indexRouter } from './routes/indexRouter';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(3000, () => console.log('listening to port 3000'));
