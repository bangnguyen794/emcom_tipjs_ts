import { IApiResponse } from "../models/Result.model"
import ShopModel, { IShop } from "../models/Shop.model"
import bcrypt  from "bcrypt"
export interface IbodysignUP{
    use:string,
    email?:string,
    pass:string
}
export class AccessService  {
    static signUP = async (body:IbodysignUP):Promise<IApiResponse> => {
        const username = body.use;
        const passworld  = body.pass;
        const email  = body.email
        const holerShop   = await ShopModel.findOne<IShop>({usename:username}).lean();
        if(holerShop){
            const verifyPass = await bcrypt.compareSync(passworld,holerShop.passworld)
            return {
                success: false,
                statusCode: 3,
                message: 'Shop da ton tai ispass:: ' + verifyPass ,
                elements:holerShop
            }
        }
        const bcr_pass = await bcrypt.hashSync(passworld,10);
        const new_shop = ShopModel.create({
            name:'Bangwf',
            usename:username,
            passworld: bcr_pass,
            email:email,
            status:true,
        })
        return {
            success: true,
            statusCode: 2,
            data : new_shop,
            message: 'success'
        }
    }
}