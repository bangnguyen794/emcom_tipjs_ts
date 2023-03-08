'use strict'
import {Router} from 'express';
import  accessController from '../../../../controllers/access.controller';
import { asyncHandler } from '../../../../auth/checkAuth.units';
const router =  Router();

router.post('/signUp', asyncHandler(accessController.signUP));
router.post('/signOut',asyncHandler(accessController.signOut));
//Goiwj ys
export default router;