import  { KeytokenModels, IKeyToken } from "../models/Keytoken.models";

export interface IbodycreatedKeyToken{
    userId:string,
    publicKey:string,
    
}
export class KeytokenService {
    //Khởi Lưu token vào db thành công trả về pubicKeyString
    static createdKeyToken = async (pram:IbodycreatedKeyToken) =>{
        try {
            const pubicKeyString = pram.publicKey.toString();
            const userId = pram.userId;
            const token:IKeyToken = new  KeytokenModels({
                usename: userId,
                pubicKey:pubicKeyString,
            });
    
           await token.save();
            return token?pubicKeyString:null
        } catch (error) {
            return null
        }
    }
}