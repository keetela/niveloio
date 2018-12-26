/* eslint linebreak-style: ["error", "windows"] */
import queryuser from '../database/usersquery';

export default class User {
  // query all users from the database
  static getAllUsers(req, res) {
    queryuser.getAll().then((users) => {
      res.status(200).json({
        message: 'all users',
        users,
      });
    });
  }

  // sign up new user
  static createUser(req, res) {
   queryuser
     .create(req.body)
     .then(user => res.status(200).json(post[0]))
     .catch((error) => {
       if (error.routine === '_bt_check_unique') {
          console.log("exists");
         // return res.json({
         //   message: 'Sorry, user already exists!',
         // });
       }
       if (error.routine === 'ExecConstraints') {
         console.log("can't be empty");
         // return res.status(402).json({
         //   message: 'user post cannot be empty',
         // });
       }
       else{
          console.log("hano")
       }
     });
 }
}
