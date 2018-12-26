cls/* eslint linebreak-style: ["error", "windows"] */
import queryuser from '../database/usersquery';

// Joi, validation helper
import Joi from 'joi';

// time and time library
import moment from 'moment';
const time = moment().format();


// manage auth
import jwt from 'jsonwebtoken';
import Auth from '../helpers/verifyAuth';


const saltRounds = 10;
import bcrypt from 'bcrypt';

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
  const {error} = validateUser(req.body);
  const password = req.body.password;
  const hash = bcrypt.hashSync(password, saltRounds);

  if(error){
      res.status(400).send({
        message:error.details[0].message
      });
      return;
  }
    queryuser
    .create(req.body)
    .then(user => res.status(200).json(post[0])
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