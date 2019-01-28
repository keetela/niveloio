import { Router } from 'express';
import passport from 'passport';
import Mailer from '../../controllers/mailer';

import User from '../../controllers/user';

// check auth
import verifyAuth from '../../middleware/verifyAuth';

const userRouter = Router();

// check if auth
const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect('/auth/login');
  } else {
    next();
  }
};
// is auth
const isAuth = (req, res, next) => {
  if (req.user) {
    res.redirect('/me');
  } else {
    next();
  }
};

userRouter.get('/', (req, res, next) => {
  res.render('index', { user: req.user });
});

//* ** GET all users *** //
userRouter.get('/api/v1/users', User.getAllUsers);

//* ** Sign up new user*** //
userRouter.post('/api/v1/signup', User.createUser);

//* ** Login *** //
userRouter.post('/api/v1/login', User.login);

//* ** send email *** //
userRouter.post('/api/v1/mailer', Mailer.test);

//* ** Protected Route ** *//
userRouter.get('/api/v1/protected', verifyAuth, (req, res) => {
  res.send({
    message: 'protected',
  });
});

// Passport
userRouter.get('/auth/login', (req, res) => {
  res.render('login');
});
// google
userRouter.get(
  '/auth/google',
  isAuth,
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

userRouter.get('/me', authCheck, (req, res) => {
  res.render('profile', { user: req.user });
});
// callback route for google to redirect to
userRouter.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/me');
});
// logout
userRouter.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/auth/login');
});

// user information, update username

//* ** UnPublish a post *** //
userRouter.post('/api/v1/users/:id/username', authCheck, User.setUsername);

export default userRouter;
