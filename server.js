/* eslint linebreak-style: ["error", "windows"] */
import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));



import passport  from 'passport';
// // cookie
const cookieSession = require('cookie-session');

app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [process.env.COOKIE_KEY]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// calling routes
import routers from './routes/router';
// register routes
app.use(routers);


const PORT = process.env.PORT || 3000;

import  exphbs from 'express-handlebars';
import path from 'path';

// View engine setup
// app.engine('handlebars', exphbs());
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: [
    'views/includes/'
  ]
}));
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
  res.status(500).send({
    message: err.message
  });
});

app.listen(PORT,() => {
  console.log(`Server started with Port: ${PORT}`);
});

export default app;
