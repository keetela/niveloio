import queryblog from '../database/blogquery';

export default class Post {
  // query all posts from the database
  static getAllPosts(req, res, next) {
    queryblog
      .getAll()
      .then((posts) => {
        res.status(200).json({
          message: 'all posts',
          posts,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  // query one post from the database
  static getOnePost(req, res, next) {
    queryblog
      .getOne(req.params.id)
      .then((post) => {
        res.status(200).json({
          post,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  // publish a new post by setting publish property to true
  static publishPost(req, res, next) {
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
      .then(post => res.status(200).json(post))
      .catch((error) => {
        next(error);
      });
  }
}
