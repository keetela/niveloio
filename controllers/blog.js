/* eslint linebreak-style: ["error", "windows"] */
import queryblog from '../database/blogquery';

export default class Post {
  // query all posts from the database
  static getAllPosts(req, res) {
    queryblog.getAll().then((posts) => {
      res.status(200).json({
        message: 'all posts',
        posts,
      });
    });
  }

  // query one post from the database
  static getOnePost(req, res) {
    queryblog.getOne(req.params.id).then((post) => {
      res.status(200).json({
        post,
      });
    });
  }

  // publish a new post by setting publish property to true
  static publishPost(req, res) {
    const updatedPost = {
      id: req.params.id,
      title: req.body.title,
      content: req.body.content,
      publish: true,
      unpublish: false,
    };
    queryblog
      .publish(req.params.id, updatedPost)
      .then(() => queryblog.getOne(req.params.id))
      .then(post => res.status(200).json(post));
  }

  // publish a new post by setting publish property to true
  static unpublishPost(req, res) {
    const updatedPost = {
      id: req.params.id,
      title: req.body.title,
      content: req.body.content,
      publish: false,
      unpublish: true,
    };
    queryblog
      .publish(req.params.id, updatedPost)
      .then(() => queryblog.getOne(req.params.id))
      .then(post => res.status(200).json(post));
  }

  static createPost(req, res) {
    queryblog
      .create(req.body)
      .then(blogId => queryblog.getOne(blogId)) // check db to see if its created
      .then(post => res.status(200).json(post)) // then we return it
      .catch((error) => {
        if (error.routine === '_bt_check_unique') {
          return res.json({
            message: 'the same question has been asked',
          });
        }
        if (error.routine === 'ExecConstraints') {
          return res.status(402).json({
            message: 'blog post cannot be empty',
          });
        }
      });
  }

  static deleteBlogPost(req, res) {
    queryblog
      .getOne(req.params.id)
      .then((post) => {
        queryblog
          .deletePost(req.params.id)
          .then(() => res.status(200).json({
            message: 'Post deleted',
            post,
          }))
          .catch((error) => {
            res.json({
              message: 'post not found',
              error,
            });
          });
      })
      .catch((error) => {
        if (error.routine === 'pg_atoi') {
          res.status(402).json({
            message: 'invalid id type',
          });
        }
      });
  }
}
