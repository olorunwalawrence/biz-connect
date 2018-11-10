const chai = require('chai');
const chaiHttp = require('chai-http');

// const app =  require('../app');

chai.use(chaiHttp);
const { should } = chai;
should();

// set up test fro get api
describe('BIZ-CONNECT', () => {
	it('should list all biz with status code of 200', (done) => {
		chai
			.request('')
			.get('/getallbiz')
			.end((err, res) => {
				res.body.should.have.status(200);
				res.body.should.be.an('object');
				res.body.should.be.json;
			});
		done();
	});

	it('should add a SINGLE biz on /addbiz POST', function (done) {
		chai
			.request('')
			.post('/addbiz')
			.send({ 'name': 'Java', 'lastName': 'Script' })
			.end(function (err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.should.have.property('SUCCESS');
				res.body.SUCCESS.should.be.a('object');
				res.body.SUCCESS.should.have.property('name');
				res.body.SUCCESS.should.have.property('lastName');
				res.body.SUCCESS.should.have.property('_id');
				res.body.SUCCESS.name.should.equal('Java');
				res.body.SUCCESS.lastName.should.equal('Script');
			});
		done();
	});

	// get a single todo

});

