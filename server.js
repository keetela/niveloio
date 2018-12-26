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

// error 404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Internal server error
app.use((err, req, res) => {
  res.status(500).send({
    message: "Error 500. Page not found"
  });
});
// other request errors
app.use((err, req, res) => {
  res.status(err.status);
  res.json({
    message: err.message,
    error: err.status,
  });
});

app.listen(PORT);

export default app;
