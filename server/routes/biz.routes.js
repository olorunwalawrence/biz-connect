import express from 'express';
import biz from '../controllers/biz.controllers';
import verifyUser from '../middlewares/authentication';
const router = express();
const {  createUser,createBusiness,findAll }  = biz;

router.post('/login', verifyUser,createUser);
router.post('/createbiz',createBusiness);
router.get('/getallbiz',findAll);

export default router;