import mongoose, { Document, Schema } from "mongoose"
const DOCUMENT_NAME = "ApiKey";
const COLECTION_NAME = "ApiKeys"; 
type type_permissions = '0000|0001|0002'
export interface IApiKey extends Document{
        key:string,
        status:boolean,
        permissions:[string]
    }
const apiKeySchema  = new Schema<IApiKey>({
        key:{
            type:String,
            required:true
        },
        status:{
            type:Boolean,
            default:true
        },
        permissions:{
            type:[String],
            required:true,
            enum: ['0000','0001','0002']
        }
    },{
        collection:COLECTION_NAME,
        timestamps:true
    });
const apiKeyModel = mongoose.model(COLECTION_NAME,apiKeySchema) ; 
export default apiKeyModel;