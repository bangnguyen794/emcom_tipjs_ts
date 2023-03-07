import mongoose, { Document, Schema } from "mongoose"
const DOCUMENT_NAME = "ApiKey";
const COLECTION_NAME = "ApiKeys"; 
type type_permissions = '000|002|003'
export interface IApiKey extends Document{
        key:string,
        status:boolean,
        permissions:type_permissions
    }
const apiKeySchema  = new Schema<IApiKey>({
        key:{
            type:String,
            required:true
        },
        status:{
            type:Boolean,
            default:false
        },
        permissions:{
            type:String,
            required:true,
            enum: ['000','001','002']
        }
    },{
        collection:COLECTION_NAME,
        timestamps:true
    });
const apiKeyModel = mongoose.model(COLECTION_NAME,apiKeySchema) ; 
 export default apiKeyModel;