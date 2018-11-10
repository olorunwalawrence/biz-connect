import express from 'express';
import biz from '../controllers/biz.controllers';
import verifyUser from '../middlewares/authentication';
const router = express();
const {  createUser,createBusiness }  = biz;

router.post('/login', verifyUser,createUser);
router.post('/createbiz',createBusiness);

export default router;