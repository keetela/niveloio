import { Router } from 'express';
import Post from '../../controllers/blog';

const blogRouter = Router();

//* ** GET all posts *** //
blogRouter.get('/api/v1/posts', Post.getAllPosts);

//* ** GET single posts *** //
blogRouter.get('/api/v1/posts/:id', Post.getOnePost);

//* ** Create a new posts *** //
blogRouter.post('/api/v1/posts', Post.createPost);

//* ** Publish a post *** //
blogRouter.put('/api/v1/posts/:id/publish', Post.publishPost);

//* ** UnPublish a post *** //
blogRouter.put('/api/v1/posts/:id/unpublish', Post.publishPost);

//* ** delete a post *** //
blogRouter.delete('/api/v1/posts/:id', Post.deleteBlogPost);

export default blogRouter;
