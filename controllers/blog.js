import queryblog from '../database/blogquery';

export default class Post {
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
}
