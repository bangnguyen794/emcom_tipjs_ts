import mongoose, { Document, Schema} from "mongoose";
import { IBrowse } from "./Browser.model";

const DOCUMENT_NAME = "Key";
const COLECTION_NAME = "keys"; 


export interface IKeyToken extends Document {
    userID:string,
    pubicKey:string,
    privateKey:string,
    browse:IBrowse,
    status:boolean,
}

const keySchema  =  new Schema<IKeyToken>({
    userID:{
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
export const KeytokenModels =  mongoose.model<IKeyToken>(DOCUMENT_NAME,keySchema);