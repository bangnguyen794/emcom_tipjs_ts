import  { KeytokenModels, IKeyToken } from "../models/Keytoken.models";

export interface IbodycreatedKeyToken{
    userId:string,
    publicKey:string,
    privateKey:string
    
}
export class KeytokenService {
    //Khởi Lưu token vào db thành công trả về pubicKeyString
    static createdKeyToken = async (pram:IbodycreatedKeyToken) =>{
        try {
            const pubicKeyString = pram.publicKey.toString();
            const  privateKeyString  = pram.publicKey.toString();
            const userId = pram.userId;
            const token:IKeyToken = new  KeytokenModels({
                userID: userId,
                pubicKey:pubicKeyString,
                privateKey:privateKeyString
            });
    
           await token.save();
            return token?token.pubicKey:null
        } catch (error) {
            return null
        }
    }
}