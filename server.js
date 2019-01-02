/* eslint linebreak-style: ["error", "windows"] */
import express from 'express';
import morgan from 'morgan';
import routers from './routes/router';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(routers);

const PORT = process.env.PORT || 3000;

import  exphbs from 'express-handlebars';
import path from 'path';

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err)
  res.status = 500;
  res.json({
    message: err.message,
    error: err.status,
  });
});

app.listen(PORT);

export default app;
