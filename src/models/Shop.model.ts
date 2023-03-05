import {Schema, model} from "mongoose";

const DOCUMENT_NAME = 'Shop';
const COLECTION_NAME = "Shops";

 export  interface IShop {
    name:string,
    usename:string,
    passworld: string,
    email:string,
    address: object[],
    status:boolean,
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
   
    
 },{
    collection:COLECTION_NAME,
    timestamps:true
 });
 export default model<IShop>(DOCUMENT_NAME,shopSchema);