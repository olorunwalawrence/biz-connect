import express from 'express';
import biz from '../controllers/biz.controllers';
import verifyUser from '../middlewares/authentication';
const router = express();
const {  createUser, createBusiness, findAll, update, destroy}  = biz;

router.post('/login', verifyUser,createUser);
router.post('/createbiz',verifyUser,createBusiness);
router.get('/getallbiz',verifyUser,findAll);
router.put('/updatebiz',verifyUser,update);
router.delete('/deletebiz',verifyUser,destroy);

export default router;