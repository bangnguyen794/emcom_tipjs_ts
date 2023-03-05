'use strict'
import { Router,Request,NextFunction, Response } from "express";
import apiv1 from './api/v1/index.v1'; 
const fs = require('fs');
const router = Router();

router.use('/api',apiv1);

router.get('',(req:Request,res:Response,next:NextFunction)=>{
    const html = fs.readFileSync(global.__dirname+'/index.html', 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html); 
});
export default router; 