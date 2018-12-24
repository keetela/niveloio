import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);

describe('Get all posts /api/v1/posts', () => {
  it('should return an object of all posts', (done) => {
    chai
      .request(app)
      .get('/api/v1/posts')
      .end((err, res) => {
        chai.expect(res.statusCode).to.be.equal(200);
        chai.expect(res.body).to.be.a('object');
        done();
      });
  });
});
