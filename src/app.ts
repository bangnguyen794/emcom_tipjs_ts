import express, {Request,Response,NextFunction, Application} from "express";
// import  { NodeJS } from  '../models/global.m';
// declare let _global: NodeJS.Global;
const http = require('http');
const morgan = require('morgan')
const compression = require('compression')
const fs = require('fs');
const path = require('path')
import helmet from 'helmet';
import { Server,Socket} from "socket.io";

const app:Application = express();
global.__dirname = __dirname;

//inint middlewares
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(morgan('dev')); // in ra log khi chạy requets :  (dev , compile, common ...)
app.use(helmet.contentSecurityPolicy({
    directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "script-src": ["'self'", "maxcdn.bootstrapcdn.com", "ajax.googleapis.com"],
        "script-src-attr": ["'none'"]
      }
}));//Alow all Nguồn web bên ngoài 
app.use(compression());
app.use(express.json());



//Router 
app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    const html = fs.readFileSync(global.__dirname+'/index.html', 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);

})



// const port:Number =port;

const server = http.createServer(app);
const io = new Server(server);
//__dirname._io = io;
io.on('connection', (socket:Socket) => {
    console.log('A user connected' + socket.id);
  });

export default server;

