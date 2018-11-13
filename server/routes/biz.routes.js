import express from 'express';
import biz from '../controllers/biz.controllers';
import verifyUser from '../middlewares/authentication';

import validator,{bizValidator} from '../middlewares/validator';
import checkNull,{checknull} from '../middlewares/checkundefined';

const router = express();
const {  createUser, createBusiness, findAll,getBizByCategory, update,removeBiz,login,getAllUsers}  = biz;
const { validateSignup} = validator;
const { businessValidator } = bizValidator;
const { checkBizUndefined } = checkNull;
const { checkuserNull } = checknull;



// signup end point
router.post('/signup',validateSignup,createUser);

// create biz end point
router.post('/createbiz',checkBizUndefined,businessValidator,verifyUser,createBusiness);
// get all biz end point
router.get('/getallbiz',verifyUser,findAll);

// list all users by their usernames
router.get('/getallusers/:username',verifyUser,getAllUsers);
// get all biz by category

router.get('/getallbizbycat/:category',verifyUser,getBizByCategory);
// login user end point
router.post('/login',verifyUser,login);

// update biz end point
router.put('/updatebiz/:id',verifyUser,update);

// delete biz end point
router.delete('/deletebiz/:id',verifyUser,removeBiz);




export default router;