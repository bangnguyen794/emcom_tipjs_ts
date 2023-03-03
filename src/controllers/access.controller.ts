'use strict'

import { NextFunction, Request, Response } from "express"
 class accessController {
    signUP = async (req:Request,res:Response,next:NextFunction)=>{
        try{
            console.log(`[p]::SignUP `, req.body);
            return res.status(200).json({
                success:true,
                datas:[],
                code:2,
                message:'',
                elements:{}
            });
        }catch(err){
            next(err);
        }
    }
}
export default new accessController();