import { IApiResponse } from "../models/Result.model"
import  { IShop , ShopModel} from "../models/Shop.model"
import bcrypt  from "bcrypt";
import { KeytokenService } from "./keyToken.service";
import {createdTokenPair, verifyToken} from "../auth/auth.untils";
import { getIntoData } from "../units/index.untils";
import { BadRequestError } from "../core/error.response";
import { SuccessResponse } from "../core/success.response";
const crypto= require('crypto');
export interface IbodysignUP{
    use:string,
    email?:string,
    pass:string,
    name:string,

}
export class AccessService  {
    static signUP = async (body:IbodysignUP):Promise<IApiResponse> => {

        const use = body.use;
        const passworld  = body.pass;
        const email  = body.email;
        const name  = body.name;
        // const a:any = undefined;
        // if(a.nam=='1'){
            
        // }
        const holerShop   = await ShopModel.findOne<IShop>({username:use}).lean();
        if(holerShop){
           // const verifyPass = await bcrypt.compareSync(passworld,holerShop.passworld)
           throw new  BadRequestError('Error: Shop da ton tai');
            // return {
            //     success: false,
            //     statusCode: 3,
            //     message: 'Shop da ton tai',
               
            // }
        }

        const bcr_pass = await bcrypt.hashSync(passworld,10);
        const new_shop:IShop = new ShopModel({
            name:name,
            username:use,
            passworld: bcr_pass,
            email:email,
            type:'khac',
            status:true,
        });
        await new_shop.save();
        if(new_shop){
            const userId = new_shop._id;
             // Tạo một cặp khóa mới :privateKey save trình duyệt, publicKey Lưu DB
            //  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
            //     modulusLength: 4096,
            //     publicKeyEncoding: {
            //     type: 'pkcs1',
            //     format: 'pem'
            //     },
            //     privateKeyEncoding: {
            //     type: 'pkcs1',
            //     format: 'pem'
            //     }
            // });

            const publicKey = crypto.randomBytes(64).toString('hex');
            const privateKey = crypto.randomBytes(64).toString('hex');
            //console.log('publicKey_privateKey', publicKey, privateKey);
            //Lưu db 
           
            const keyStore  = await KeytokenService.createdKeyToken({userId:userId,publicKey:publicKey,privateKey:privateKey})
            
            
            if(!keyStore) return {
                success: false,
                statusCode: 3,
                message: 'Lỗi  tạo keyStore'
            }
            console.log('keyStore: ', keyStore);
           
            //Tạo tokens [accesstoke && refesh token ] lưu trreen trình duyệt người dùng 
            const tokens = await createdTokenPair({userId:userId,name:name},publicKey, privateKey); // privateKey dùng để tạo token

            //test decor accessToken
            //const pubicKeyObject = crypto.createPublicKey(publicKeyString); //sử dụng để tạo đối tượng khóa công khai (public key object) từ chuỗi khóa công khai (publicbKey)
            //console.log(pubicKeyObject);
            const decode  = await verifyToken(publicKey,tokens?.accessToken as string);
            console.log('------------',decode);
           
            return {
                success: false,
                statusCode: 3,
                data:tokens as object,
                message: 'Created shop success !! ',
                elements: getIntoData({fields: ['_id','usename','email'],object: new_shop} ),
                
            }
        }
        return {
            success: false,
            statusCode: 4,
            data : new_shop,
            message: 'Lỗi kKởi tạo'
        }
    }
}