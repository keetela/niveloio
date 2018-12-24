/* eslint linebreak-style: ["error", "windows"] */
import express from 'express';
import morgan from 'morgan';
import routers from './routes/router';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(routers);
// error handler
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {},
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

export default app;
