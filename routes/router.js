import express from 'express';
import Post from '../controllers/blog';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Welcome to nivelo api',
  });
});

//* ** GET all posts *** //
router.get('/api/v1/posts', Post.getAllPosts);

//* ** GET single posts *** //
router.get('/api/v1/posts/:id', Post.getOnePost);

//* ** Publish a post *** //
router.put('/api/v1/posts/:id/publish', Post.publishPost);

//* ** UnPublish a post *** //
router.put('/api/v1/posts/:id/unpublish', Post.unpublishPost);
export default router;
