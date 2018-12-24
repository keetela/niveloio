import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const { expect } = chai;

process.env.NODE_ENV = 'test';

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
  describe('Get  /api/v1/posts/:id', () => {
    it('should return a single post', (done) => {
      chai
        .request(app)
        .get('/api/v1/posts/8')
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
});
