/* eslint linebreak-style: ["error", "windows"] */
import queryuser from '../database/usersquery';

// Joi, validation helper
import Joi from 'joi';

// time and time library
import moment from 'moment';
const time = moment().format();


// manage auth
// import jwt from 'jsonwebtoken';
// import Auth from '../helpers/verifyAuth';

// encrypting password
import bcrypt from 'bcryptjs';
var salt = bcrypt.genSaltSync(10);

export default class User {
  // query all users from the database
  static getAllUsers(req, res) {
    queryuser
    .getAll()
    .then((users) => {
      res.status(200).json({
        message: 'all users',
        users
      });
    });
  }

  // sign up new user
  static createUser(req, res) { 
    // validate user
    const {error} = validateUser(req.body);
    if(error){
        res.status(400).send({
          message:error.details[0].message
        });
        return;
    }
    // hash password
    var password = bcrypt.hashSync(req.body.password, salt);
    // user info
    const user = {
      names: req.body.names,
      email: req.body.email,
      username: req.body.username,
      password:password
    };
    // start insert query
    queryuser
      .create(user)
      .then(user => res.status(200).json({
        message: "User registered successfully"
      })
      )
      .catch((error) => {
        if (error.routine === '_bt_check_unique') {
          return res.status(422).json({
              message: 'Sorry, user already exists!'
          });
        }
        if (error.routine === 'ExecConstraints') {
            return res.status(402).json({
            message: 'user post cannot be empty'
          });
        }
        if(error){
          res.json({
            message:error
          });
        }
      });
    } 
  }

// validating user
function validateUser(user){
  const schema = {
      names: Joi.string().min(5).max(60).required(),
      username: Joi.string().min(6).max(30).required(),
      email: Joi.string().email().min(10).max(300),
      password: Joi.string(),
      created_time: Joi.date()
      
  };
  return Joi.validate(user, schema);
}