import mongoose, {Document, Schema} from "mongoose";


const DOCUMENT_NAME = 'Shop';
const COLECTION_NAME = "Shops";
type _type = 'google|facebook|web|zalo|khac'
 export  interface IShop extends Document {
    name:string,
    usename:string,
    passworld: string,
    email:string,
    address: object[],
    status:boolean,
    type:_type,
    createdAt?:Date

 } 
 const shopSchema =new Schema<IShop>({
    name:{
        type:String,
        required:true,
        maxlength:15,
        trim:true,
    },
    usename:{
        type:String,
        required: true,
        maxlength:150,
        unique:true,
    },
    passworld:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,

    },
    status:{
        type:Boolean,
        default:false
    },
    type:{
        type:String,
    },
 },{
    collection:COLECTION_NAME,
    timestamps:true
 });
 export const ShopModel = mongoose.model<IShop>(DOCUMENT_NAME,shopSchema);