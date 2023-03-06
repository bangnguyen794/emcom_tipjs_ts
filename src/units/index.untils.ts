import { IncomingHttpHeaders } from 'http';
import {pick} from 'lodash';
import { IBrowse } from '../models/Browser.model';
interface IbodyIntoData{
    fields: string[];
    object: { [key: string]: any };
  }
  
export const getIntoData = ({fields =[],object  = {}}:IbodyIntoData) =>{
    return pick(object,fields);
};

export const  GetIBrowser = (headers:IncomingHttpHeaders):IBrowse => {
    return {
        userAgent: headers['user-agent'] as string,
        platform: headers['accept-language'] as string,
        appName: headers['app-name'] as string,
        appVersion: headers['app-version'] as string,
        appCodeName: headers['app-code-name'] as string,
        productSub: headers['product-sub'] as string,
      
    }; 
}