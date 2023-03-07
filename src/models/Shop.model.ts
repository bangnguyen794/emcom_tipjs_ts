import mongoose, {Document, Schema} from "mongoose";
const mongoSanitize = require('express-mongo-sanitize');

const DOCUMENT_NAME = 'Shop';
const COLECTION_NAME = "Shops";
type _type = 'google|facebook|web|zalo|khac'
 export  interface IShop extends Document {
    name:string,
    username:string,
    passworld: string,
    email:string,
    address: object[],
    status:boolean,
    type:_type,
  
 } 
 const shopSchema =new Schema<IShop>({
    name:{
        type:String,
        required:true,
        maxlength:15,
        trim:true,
        set: mongoSanitize.sanitize
    },
    username:{
        type:String,
        required: true,
        maxlength:150,
        unique:true,
        set: mongoSanitize.sanitize
    },
    passworld:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        set: mongoSanitize.sanitize

    },
    status:{
        type:Boolean,
        default:false,
    },
    type:{
        type:String,
        set: mongoSanitize.sanitize
    },
 },{
    collection:COLECTION_NAME,
    timestamps:true
 });
 export const ShopModel = mongoose.model<IShop>(DOCUMENT_NAME,shopSchema);