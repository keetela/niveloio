import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const { expect } = chai;

process.env.NODE_ENV = 'development';

chai.use(chaiHttp);

describe('Niveloio : routes testing', () => {
  beforeEach((done) => {
    done();
  });

  afterEach((done) => {
    done();
  });
  describe('Get /api/v1/posts', () => {
    it('should return an object of all posts', (done) => {
      chai
        .request(app)
        .get('/api/v1/posts')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.body).to.be.a('object');
          done();
        });
    });
  });
  // get a single post
  describe('Get  /api/v1/posts/:id', () => {
    it('should return a single post', (done) => {
      chai
        .request(app)
        .get('/api/v1/posts/18')
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(200);
          expect(res.body.post).to.be.have.property('title');
          expect(res.body.post).to.be.have.property('content');
          expect(res.body.post).to.be.have.property('publish');
          expect(res.body.post).to.be.have.property('unpublish');
          done();
        });
    });
  });
  // publish a post
  describe('PUT  /api/v1/posts/:id/publish', () => {
    it('should publish a post', (done) => {
      chai
        .request(app)
        .put(`/api/v1/posts/${17}/publish`)
        .send({
          title: 'what is nodejs best use case?',
          content: 'Lorem Ipsum is simply dummy',
          publish: true,
          unpublish: false,
        })
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(200);
          expect(res.body).to.be.have.property('title');
          expect(res.body).to.be.have.property('content');
          expect(res.body).to.be.have.property('publish', true);
          expect(res.body).to.be.have.property('unpublish', false);
          done();
        });
    });
  });
  // unpublish a post
  describe('PUT  /api/v1/posts/:id/unpublish', () => {
    it('should publish a post', (done) => {
      chai
        .request(app)
        .put(`/api/v1/posts/${17}/unpublish`)
        .send({
          title: 'what is nodejs best use case?',
          content: 'Lorem Ipsum is simply dummy',
          publish: false,
          unpublish: true,
        })
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(200);
          expect(res.body).to.be.have.property('title');
          expect(res.body).to.be.have.property('content');
          expect(res.body).to.be.have.property('publish', false);
          expect(res.body).to.be.have.property('unpublish', true);
          done();
        });
    });
  });
  // create a new post
  describe('POST  /api/v1/posts', () => {
    it('should create a post', (done) => {
      chai
        .request(app)
        .post('/api/v1/posts')
        .send({
          title: 'What does is PR and github naming convention?',
          content: 'Lorem Ipsum is simply dummy',
          publish: true,
          unpublish: false,
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.have.property('message', 'the same question has been asked');
          done();
        });
    });
  });
});
