import express from 'express';
import queryblog from '../database/blogquery';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Welcome to nivelo api',
  });
});

router.get('/api/v1/posts', (req, res, next) => {
  queryblog
    .getAll()
    .then((blog) => {
      res.status(200).json(blog);
    })
    .catch((error) => {
      next(error);
    });
});

export default router;
