'use strict'
import mongoose,{ConnectOptions} from "mongoose";
import { EnvironmentConfig } from '../models/SettingEnv';
import config from '../../configs/env.config';

const {db : {host, use,pass, name}} = config;
const stringConnect = `${host}://${use}:${pass}@cluster0.kojomqx.mongodb.net/${name}?retryWrites=true&w=majority`;

class Database{
    private static instance:Database;
    constructor(){
        this.connect();
    }
     //sử dụng instance chỉ muốn  gọi connect databse 1 lần duy nhất
     static getInstance():Database{
        if(!Database.instance){
            Database.instance=new Database();
        }
        return Database.instance;
    }
    connect():void{
        if(1==1){
            mongoose.set('debug',true);
            mongoose.set('debug',{color:true});
        }
        const options: ConnectOptions = {
            maxPoolSize: 500
          };
        mongoose.connect(stringConnect,options).then( _ =>{
            console.log('connect database mongodb Success !!');
        }).catch( err=> console.log(err))

    }
   
}

const instanceMongodb = Database.getInstance();
export default instanceMongodb;
