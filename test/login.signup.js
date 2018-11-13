const chai = require('chai');
const chaiHttp = require('chai-http');
import jwt from 'jsonwebtoken';
import app from '../app';

chai.use(chaiHttp);
const { should } = chai;

should();


const token = jwt.sign({ id: 1 }, process.env.SECRET, { expiresIn: '10h' });

 describe('App', () => {

  //Create another test file for login and sign up

  // test for user login

  it('should return success for a successful authentication /signup POST', (done) => {
    chai
      .request(app)
      .post('/signup')
      .send({
        username: 'olorunwa',
        email: 'olorunwalawrence5@gmail.com',
        password: 'lovers'
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.an('object');
        res.body.should.have.property('message');
        res.body.message.should.be.equal('user created successfully');
        res.body.should.should.have.a.property('token');

      });
    done();
  });
});
