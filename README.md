# Niveloio [![Build Status](https://travis-ci.com/niveloio/niveloio.svg?branch=develop)](https://travis-ci.com/niveloio/niveloio) [![Coverage Status](https://coveralls.io/repos/github/niveloio/niveloio/badge.svg?branch=develop&kill-cache=1)](https://coveralls.io/github/niveloio/niveloio?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/57a880b0b1fbcf7dc89e/maintainability)](https://codeclimate.com/github/niveloio/niveloio/maintainability)

![](./logo.jpg)

# Sendit API Standards

- [Setup Instructions](#instructions)
- [RESTful URLs](#restful-urls)
- [Request & Response Examples](#request--response-examples)

## Setup Instructions

Install dependencies:

```sh
$ npm install
```

Startup the Server:

```sh
$ npm start
```

Run Tests:

```sh
$ npm run test
```

## RESTful URLs

| Method | Endpoint                        | Description        |
| ------ | ------------------------------- | ------------------ |
| GET    | /api/v1/posts                   | List all posts     |
| GET    | /api/v1/posts/:postId           | Query one post     |
| POST   | /api/v1/posts                   | Create a new post  |
| PUT    | /api/v1/posts/:postId/publish   | Publish a new post |
| PUT    | /api/v1/posts/:postId/unpublish | Unpublish a post   |
| DELETE | /api/v1/posts/:postId           | Delete a post      |

## Request & Response Examples

### API Resources

- [GET /posts](#get-posts)
- [GET /postId](#get-onepost)

### GET /posts

Example: https://niveloio.herokuapp.com/api/v1/posts
```
Response body:

    "message": "all posts",
    "posts": [
      {
        "id": 5,
        "title": "what is es6?",
        "content": "Lorem Ipsum is simply dummy",
        "publish": true,
        "unpublish": false
      },
      {
        "id": 7,
        "title": "what is nodejs?",
        "content": "Lorem Ipsum is simply dummy",
        "publish": true,
        "unpublish": false
      },
      {
        "id": 6,
        "title": "what is javascript?",
        "content": "Lorem Ipsum is simply dummy",
        "publish": true,
        "unpublish": false
      },
      {
        "id": 8,
        "title": "what is TDD?",
        "content": "Lorem Ipsum is simply dummy",
        "publish": true,
        "unpublish": false
      }
    ]

}
```

### GET /postId

Response body:
Example: https://niveloio.herokuapp.com/api/v1/posts/5
```
    {

      "post": {
      "id": 5,
      "title": "what is es6?",
      "content": "Lorem Ipsum is simply dummy",
      "publish": true,
      "unpublish": false
      }
    }
```

## Register a new user

### Note: Remember to update npm 

```
npm update
```

### RESTful URLs

| Method | Endpoint                        | Description        |
| ------ | ------------------------------- | ------------------ |
| GET    | /api/v1/users                   | List all users     |
| POST   | /api/v1/users                   | Register a new user  |

### POST: Registering new user

```
{
	"names": "John Doe",
  "username": "johndoe",
  "email": "john@doe.com",
  "password": "secret"
}
```

Example: https://niveloio.herokuapp.com/api/v1/users