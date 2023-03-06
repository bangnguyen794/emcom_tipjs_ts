import IWT from 'jsonwebtoken';
import { resolve } from 'path';
export const createdTokenPair = async (playLoad:object,privatKey:string)=>{
    try {
        const accessToken = await IWT.sign(playLoad,privatKey,{
            algorithm:'RS256',
            expiresIn:'2 days'
        });
        const refeshToken =  await IWT.sign(playLoad,privatKey,{
            algorithm:'RS256',
            expiresIn:'7 days'
        });
        return {accessToken, refeshToken};
    } catch (error) {
        return null;
    }
}

export const verifyToken  = async (publicKey:string,accessToken:string) => {
    try {
        const  decode  = await new Promise((resolve,reject)=>{
            IWT.verify(accessToken,publicKey,(err,decode)=>{
                if(err) reject({status:false,mss:err}) 
                else  resolve( {status:true,data:decode})
            });
        });
        return  decode ;
    } catch (error) {
        return { status: false, message: error };
    }
    
}
