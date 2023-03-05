import { IncomingHttpHeaders } from 'http';
import {IBrowse} from '../models/Browser.model'

export default function GetIBrowser(headers:IncomingHttpHeaders):IBrowse {
   
    return {
        userAgent: headers['user-agent'] as string,
        platform: headers['accept-language'] as string,
        appName: headers['app-name'] as string,
        appVersion: headers['app-version'] as string,
        appCodeName: headers['app-code-name'] as string,
        productSub: headers['product-sub'] as string,
      
    };
    
}