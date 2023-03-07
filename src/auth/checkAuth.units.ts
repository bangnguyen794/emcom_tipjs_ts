import { Express,Request,Response,Router } from "express";
import { IApiResponse } from "../models/Result.model";
const headers = {
    API_KEY: 'x-api',
    AUTHORIZATON:'authozation'
}
const apiKey = async (req:Request,res:Response)=>{
    try{
        const key  = req.headers[headers.API_KEY]?.toString();
        if(!key){
            return res.status(403).json({
                status:false,
                message:'Forbiden error '

            });
        }
        //const new_apikey = 
    }catch(error){
        return res.status(404).json({
            status:false,
            message:'Forbiden error '

        });
    }
} 