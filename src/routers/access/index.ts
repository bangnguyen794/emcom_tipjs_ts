'use stritc'

import {Router,Request,Response,NextFunction} from 'express';
export default Router().post('/shop/signUp',async (req:Request,res:Response,next:NextFunction)=>{
    try {
        res.status(200).json({
            success:true,
            status:2,
        });
    } catch (error) {
        res.status(201).json({
            success:false,
            status:0,
            messsage:error
        });
    }
    
});