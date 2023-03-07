import { Express,NextFunction,Request,Response,Router } from "express";
import { IApiResponse } from "../models/Result.model";
import { findById } from "../services/api.service";
const headers = {
    API_KEY: 'x-api-key',
    AUTHORIZATON:'authozation'
}
interface CustomRequest extends Request {
    obj_apikey?: any;
  }
export const apiKeyAuth = async (req:CustomRequest,res:Response,next:NextFunction)=>{
    try{
    
        const key  = req.headers[headers.API_KEY]?.toString();
        if(!key){
            return res.status(403).json({
                status:false,
                message:'Forbiden error #1'
            });
        }
        const obj_apikey = await findById(key);
        if(!obj_apikey) return res.status(403).json({
            status:false,
            message:'Forbiden error #2'
        });

        req.obj_apikey=obj_apikey;
        return next();
    }catch(error){
        return res.status(404).json({
            status:false,
            error:error,
            message:'Forbiden error #3'

        });
    }
} 

export const CheckPermission = (permissions:string)=>{
  
    return (req:CustomRequest,res:Response,next:NextFunction)=>{
        if(!req.obj_apikey?.permissions){
            return res.status(403).json({
                message:'permistion denied'
            });
        }
        console.log('permissions::: ', req.obj_apikey?.permissions);
        const validPermistion  = req.obj_apikey?.permissions.includes(permissions);
        if(!validPermistion)  return res.status(403).json({
            message:'permistion denied'
        });
        return next();
    }
} 