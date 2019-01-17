/* eslint linebreak-style: ["error", "windows"] */
import express from 'express';
import Post from '../controllers/blog';
import User from '../controllers/user';
import Mailer from '../controllers/mailer'; 

import passport  from 'passport';

const router = express.Router();

// check auth
import verifyAuth from '../middleware/verifyAuth';


router.get('/',  (req, res, next) => {
  res.render('index');
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
router.post('/api/v1/signup', User.createUser);

//* ** Login *** //
router.post('/api/v1/login', User.login);

//* ** send email *** //
router.post('/api/v1/mailer', Mailer.test);

//* ** Protected Route ** *//
router.get('/api/v1/protected', verifyAuth, (req, res) => {  
  res.send({
    message: "protected"
  })
})

//Passport
router.get('/auth/login', (req, res) =>{
  res.render('login');
});
// google
router.get('/auth/google', passport.authenticate('google',{
  scope: ['profile']
}));

//callback route for google to redirect to 
router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
 res.send(`This is kanaan`);
});
// logout
router.get('/auth/logout', (req, res) =>{
  req.logout();
  res.redirect('/');
});


export default router;
