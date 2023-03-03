'use strict'
import {Router} from 'express';
import accessController from '../../controllers/access.controller';
export default Router().post('/shop/signUp',accessController.signUP);