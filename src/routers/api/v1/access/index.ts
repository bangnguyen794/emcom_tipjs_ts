'use strict'
import {Router} from 'express';
import  accessController from '../../../../controllers/access.controller';
const router =  Router();

router.post('/signUp',accessController.signUP);
router.post('/signOut',accessController.signOut);
//Goiwj ys
export default router;