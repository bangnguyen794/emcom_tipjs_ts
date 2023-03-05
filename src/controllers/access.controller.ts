
import { NextFunction, Request, Response } from "express"
import { AccessService,IbodysignUP } from "../services/access.service";
 class accessController {
    signUP = async (req:Request,res:Response,next:NextFunction) =>{
        try{
            console.log(`[p]::SignUP `, req.body);
            const body:IbodysignUP =  req.body;
            return res.status(200).json(await AccessService.signUP(body));
        }catch(err){
            next(err);
        }
    }

    signOut = async (req:Request,res:Response,next:NextFunction)=>{
        try{
            console.log(`[p]::SignpOut `, req.body);
            return res.status(200).json({
                success:true,
                datas:[],
                code:4,
                message:'SigOUt',
                body:req.body,
                elements:{}
            });
        }catch(err){
            next(err);
        }
    }
}

export default new accessController();