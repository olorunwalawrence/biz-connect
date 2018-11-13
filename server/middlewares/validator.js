import validator from 'validator';


// signuo validation
export default class Validatior {

  static validateSignup(req, res, next) {

    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).json({ message:'field is needed ' });
    }
    if (validator.isEmpty(username)) {
      return res.status(400).json({ message: 'username cannot be empty' });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid Email format. use example you@mail.com' });
    }
    next();
  }
}
// create biz validation




export class bizValidator {

  static businessValidator(req, res, next) {
    const { name, address, description, category } = req.body;
    if (!name || !address) {
      return res.status(400).json({ message:'field is needed ' });
    }
    if (validator.isEmpty(name && address && description && category)) {
      return res.status(400).json({ message: 'empty field detected' });
    }
    next();
  }
}