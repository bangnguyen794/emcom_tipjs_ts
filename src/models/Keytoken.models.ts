import { Schema, model } from "mongoose";
import { IBrowse } from "./Browser.model";

const DOCUMENT_NAME = "Key";
const COLECTION_NAME = "keys"; 
export interface IKey{
    usename:string,
    pubicKey:string,
    privateKey:string,
    browse:IBrowse,
    status:boolean,
}

const keySchema  =  new Schema<IKey>({
    usename:{
        type:String,
        required:true,

    },
    pubicKey:{
        type:String,
        required:true,
        
    },
    privateKey:{
        type:String,
        required:true,

    },
    
    status:{
        type:Boolean,
        default:true,
        
    },
    browse:{
        type: Object,
       
    }

},{
    collection:COLECTION_NAME,
    timestamps:true
});
export  default model<IKey>(DOCUMENT_NAME,keySchema);