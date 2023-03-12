
import { NextFunction, Request, Response } from "express"
import { AccessService,IbodysignUP } from "../services/access.service";

import { IApiResponse } from "../models/Result.model";
 class accessController {
    signUP  = async (req:Request,res:Response,next:NextFunction)=>{
        
        //console.log(`[p]::SignUP `, req.body);
        const body:IbodysignUP =  req.body;
        const data:IApiResponse = await AccessService.signUP(body);
        console.log('Test :: ',data);
        //throw new  SuccessResponse('Created shop success !!1', data);
        //return res.status(200).json(await AccessService.signUP(body));
        return res.status(200).json(data);
   
    }

    signOut = async (req:Request,res:Response,next:NextFunction)=>{
      
            //console.log(`[p]::SignpOut `, req.body);
            return res.status(200).json({
                success:true,
                datas:[],
                code:4,
                message:'SigOUt',
                body:req.body,
                elements:{}
            });
       
    }
}

export default new accessController();