/* eslint-disable no-undef */

const chai = require('chai');
const chaiHttp = require('chai-http');
import jwt from 'jsonwebtoken';
import app from '../app';

chai.use(chaiHttp);
const { should } = chai;
should();

const token = jwt.sign({ id: 1 }, process.env.SECRET, { expiresIn: '10h' });
// set up test for get all business
// eslint-disable-next-line no-undef
describe('app', () => {
  it('should list all biz with status code of 200', (done) => {
    chai
      .request(app)
      .get('/getallbiz')
      .set('x-access-token', token)
      .end((err, res) => {
        res.body.should.have.status(200);
        res.body.should.be.an('object');
        res.body.have.property('message');
        res.body.message.should.be.equal('posted business');
      });
    done();
  });


  // test for create business
  it('should add a SINGLE biz on /createbiz POST', (done) => {
    chai
      .request(app)
      .post('/createbiz')
      .set('x-access-token', token)
      .send({
        name: 'olorunwa',
        address: 'olorunwalawrence5@gmail.com',
        description: 'lovers',
        category: 'biz category'
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.an('object');
        res.body.should.have.property('message');
        res.body.message.should.be.equal('business created successfully');
      });
    done();
  });


});

