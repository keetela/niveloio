import query_forum from '../database/forum_query';

export default class Forum {
  // query all forum posts from the database
  static getAllForumPosts(req, res, next) {
    query_forum
      .getAll()
      .then((forum_posts) => {
        res.status(200).json({
          message: 'all forum posts',
          forum_posts,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  // query one forum post from the database
  static getOneForumPost(req, res, next) {
    query_forum
      .getOne(req.params.id)
      .then((forum_posts) => {
        res.status(200).json({
            forum_posts,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

    // publish a forum post by setting publish property to true
    static publishForumPost(req, res, next) {
        const updateForumPost = {
        id: req.params.id,
        title: req.body.title,
        content: req.body.content,
        draft: false,
        publish: true,
        unpublish: false,
        };
        query_forum
        .publish(req.params.id, updateForumPost)
        .then(() => query_forum.getOne(req.params.id))
        .then(post => res.status(200).json(post))
        .catch((error) => {
            next(error);
        });
    }

    // unPublish a forum post by setting publish property to true
    static unPublishForumPost(req, res, next) {
        const updateForumPost = {
        id: req.params.id,
        title: req.body.title,
        content: req.body.content,
        draft: false,
        publish: false,
        unpublish: true,
        };
        query_forum
        .unpublish(req.params.id, updateForumPost)
        .then(() => query_forum.getOne(req.params.id))
        .then(post => res.status(200).json(post))
        .catch((error) => {
            next(error);
        });
    }

    // draft a new forum post by setting publish property to true
    static draftForumPost(req, res, next) {
        const forumPost = {
        title: req.body.title,
        content: req.body.content,
        draft: true,
        publish: false,
        unpublish: false,
        };
        query_forum
        .draft(forumPost)
        .then(() => query_forum.getOne(req.params.title))
        .then(post => res.status(200).json(post))
        .catch((error) => {
            if (error.routine === 'ExecConstraints') {
                return res.status(402).json({
                  message: 'forum post cannot be empty',
                });
            }
        });
    }
}
