/* eslint linebreak-style: ["error", "windows"] */
import express from 'express';
import Post from '../controllers/blog';
import Forum from '../controllers/forum';
import User from '../controllers/user'; 

const router = express.Router();

router.get('/', (req, res, next) => {
  
  res.status(200).json({
    message: 'Welcome to nivelo api'
  });
});

//* ** GET all posts *** //
router.get('/api/v1/posts', Post.getAllPosts);

//* ** GET single posts *** //
router.get('/api/v1/posts/:id', Post.getOnePost);

//* ** Create a new posts *** //
router.post('/api/v1/posts', Post.createPost);

//* ** Publish a post *** //
router.put('/api/v1/posts/:id/publish', Post.publishPost);

//* ** UnPublish a post *** //
router.put('/api/v1/posts/:id/unpublish', Post.publishPost);

//* ** delete a post *** //
router.delete('/api/v1/posts/:id', Post.deleteBlogPost);

//* ** GET all users *** //
router.get('/api/v1/users', User.getAllUsers);

//* ** Sign up new user*** //
router.post('/api/v1/users', User.createUser);


//* ** get all forumPosts*** //
router.get('/api/v1/forums', Forum.getAllForumPosts);

//* ** create a new forumPost*** //
router.post('/api/v1/forum', Forum.draftForumPost);

//* ** publish a forumPost*** //
router.put('/api/v1/:id/publish', Forum.publishForumPost);

//* ** unPublish a forumPost*** //
router.put('/api/v1/:id/edit', Forum.unPublishForumPost);

export default router;
