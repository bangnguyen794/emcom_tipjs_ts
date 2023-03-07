import express, {Application} from "express";
// import  { NodeJS } from  '../models/global.m';
// declare let _global: NodeJS.Global;
const http = require('http');
const morgan = require('morgan')
const compression = require('compression')
const fs = require('fs');
const path = require('path');
const expressMongoSanitize = require('express-mongo-sanitize'); // Injection Mongodb
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
app.use(compression());//Nén khi gửi respon tới client(Giảm băng thông truyền tải)
app.use(express.json());
app.use(express.urlencoded({extended:true})); //The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).
// Sanitize user input to prevent MongoDB injection attacks
app.use(expressMongoSanitize());
//init databse
import './dbs/inint.mongodb'; //ket noi db
const { checkOverload }  = require('./helpers/checkconnect.mongodb');
checkOverload();//Kiem tra ket noi co qua tai khong

//Router 
import indexRouter from "./routers/index.router";
app.use('/', indexRouter);

const server = http.createServer(app);
const io = new Server(server);
//__dirname._io = io;
io.on('connection', (socket:Socket) => {
    console.log('A user connected' + socket.id);
});

export default server;

