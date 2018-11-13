/* eslint-disable indent */
import db from '../models/index';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import business from '../models/business';

const { user, Business } = db;
const secret = process.env.SECRET;
config();

class Biz {

	// landing page

	//find if user exist in the database, if not exist then create the user
	// if user exist then send an error message.

	// signup function
	static createUser(req, res) {
		user.findOrCreate({
			where: { email: req.body.email },

			defaults: {
				username: req.body.username,
				email: req.body.email,
				password: req.body.password
			}
		}).spread((user, created) => {

			if (!created) {
				return res.send('the email is unavailable');
			} else {
				const id = user.id;
				const token = jwt.sign({ id }, secret, { expiresIn: '10h' });
				return res.status(200).send({
					msg: 'user created successfully',
					user,
					token
				});
			}
		})
			.catch(err => res.send('username cannot be empty'));
	}

	// login function
	static login(req, res) {
		return Business.findAll({
			where: {
				username: req.body.username,
				password: req.body.password
			}
		}).then(user => {
			// const id = user.id;
			if (!user.username && !user.password) {
				res.status.send(404).send({
					message: 'user does not exist'
				});
			} else {
				res.status(200).send({
					message: 'you are successfully logged in'
				});
			}
		}).catch(err => res.status(500).json({
			// status: 'error',
			// error: err,
			message: 'you are not a valid use, please login'
		}));
	}


	// create a business ..............................
	static createBusiness(req, res) {
		// console.log(Business)
		return Business.create({
			name: req.body.name,
			address: req.body.address,
			description: req.body.description,
			category: req.body.category
		}).then((createdbiz) => {
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
			});
		});
	}


	// get business by category

	// static getbizByCategory (req,res) {
	// 	return business.findAll({
	// 		where:{
	// 			id:id;
	// 		}
	// 	})
	// }


	// update a business

	static update(req, res) {
		const id = req.params.id;
		return Business.update({ where: { id } }).then(biz => {
			res.status(200).send({
				message: 'business updated successfully' + id,
				biz
			});
		});
		// eslint-disable-next-line indent
	}

	// delete a business

	static removeBiz(req, res) {
		const id = req.params.id;
		Business.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json({ msg: 'Deleted Successfully -> business Id = ' + id });
		}).catch(err => {
			console.log(err);
			res.status(500).json({ msg: 'error', details: err });
		});
	}
	
	// get all users

	static getAllUsers(req, res) {
		const username = req.params.username;
		user.findAll({
			where:{username:username}
		}).then(users => {
			res.send(users);
		}).catch(error => {
			console.log(error);
		});
	}


	// get all business by category

	static getBizByCategory (req,res) {
		const category = req.params.category;
		user.findAll({
			where:{category:category}
		}).then(category =>{
			res.send(category);
		}).catch(err =>{
			console.log(err);
		});
	}
}

export default Biz;