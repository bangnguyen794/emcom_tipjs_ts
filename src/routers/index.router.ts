'use strict'

import { Router,Request,request,NextFunction, Response } from "express";
import routerAccess from './access/index'; 
const fs = require('fs');
const router = Router();

router.use('v1/api',routerAccess);

router.get('',(req:Request,res:Response,next:NextFunction)=>{
    const html = fs.readFileSync(global.__dirname+'/index.html', 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html); 
});
export default router; 