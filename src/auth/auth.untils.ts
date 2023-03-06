import IWT from 'jsonwebtoken';
export interface playLoadCreatedToken {
    userId:string,
    name?:string

}
export const createdTokenPair = async (playLoad:playLoadCreatedToken,pubicKey:string,privatKey:string)=>{
    try {
        const accessToken = await IWT.sign(playLoad,pubicKey,{
            //algorithm:'RS256',
            expiresIn:'2 days'
        });
        const refeshToken =  await IWT.sign(playLoad,privatKey,{
            //algorithm:'RS256',
            expiresIn:'7 days'
        });
        return {accessToken, refeshToken};
    } catch (error) {
        return null;
    }
}

export const verifyToken  = async (publicKey:string,accessToken:string) => {
    console.log('acesstoken:: ',accessToken);
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
