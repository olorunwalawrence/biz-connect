
// check for undefined or null fields on create business
export default class checkNull {

  static checkBizUndefined(req, res, next) {
    const body = req.body;
 
    const {name, address, category, description} = body;
    if (!name) {
      return res.status(422).json({ message:'Name field is needed ' });
    }

    if (!address) {
      return res.status(422).json({ message:' Address field is needed ' });
    }

    if (!category) {
      return res.status(422).json({ message:' Categoryfield is needed ' });
    }

    if (!description) {
      return res.status(422).json({ message:' Description field is needed ' });
    }
    
  
   
    next();
  }
}

// check for null and undefined in signup and login fields

export class checknull {
  static checkuserNull(req,res) {
    const body = req.body;
  
    const {username, password, email } = body;
  
    if(!username) {
      return res.status(424).json({
        message:'username field is needed'
      });
    }

    if(!password) {
      return res.status(424).json({
        message:'password field is needed'
      });
    }

    if(!email) {
      return res.status(424).json({
        message:'password field is needed'
      });
    }
  }

}
