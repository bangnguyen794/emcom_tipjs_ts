import apiKeyModel from "../models/apiKey.model";
const crypto= require('crypto');
export const findById = async (key:string)=>{
    // const new_key  = await apiKeyModel.create({
    //     key: crypto.randomBytes(64).toString('hex'),
    //     status:true,
    //     permissions: ['0000']
    // });
    //console.log(new_key);
   const objKey =   await apiKeyModel.findOne({key,status:true}).lean();
   return objKey
}