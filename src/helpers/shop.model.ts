import mongoose, { Schema,Models,Types, SchemaType } from "mongoose";
const document_name:string = 'Shop';
const colectionName:string = 'Shops'
//!dmbg


// Declare the Schema of the Mongo model
var shopSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        maxLength:150
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',

    },
    verify:{
        type:Schema.Types.Boolean,
        default:false
    },
    rolse:{
        type:Array,
        default:[]

    }
},{
    timestamps:true,
    collection:colectionName
});
const shop = mongoose.model(document_name, shopSchema);
//Export the model
export default shop;