import db from '../models/index';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import business from '../models/business';
const { user, Business } = db;
const secret = process.env.SECRET;
config();

class Biz {

	// landing page

	// create user.....................
	static createUser(req, res) {
		return user.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		}).then(user => {
			const { id } = id;
			const token = jwt.sign({ id }, secret, { expiresIn: '10h' });
			res.status(200).send({
				msg: 'user created successfully',
				user,
				token
			}).catch(err => {
				console.log(err);
			});
		});
	}


	// create a business ..............................
	static createBusiness(req, res) {
		// console.log(Business)
		return Business.create({
			name: req.body.name,
			address: req.body.address,
			description: req.body.description,
			category: req.body.category
		}).then(createdbiz => {
			res.status(200).send({
				message: 'business created successfully',
				createdbiz
			});
		});
	}

	// get all business
	static findAll(req, res) {
		return Business.findAll().then(biz => {
			res.status(200).send({
				message: 'all business retrieved',
				biz
				// eslint-disable-next-line indent
			})
		})
  }
}

export default Biz;