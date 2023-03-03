import http from './src/app'

import { EnvironmentConfig } from './src/models/SettingEnv';
import config from './configs/env.config';
const { app: { port } }: EnvironmentConfig = config;

const serrver =  http.listen(port, () => {
    console.log(`start port: ${port}`);
  }).on('error', (err: Error) => {
console.error(`Error starting server: ${err.message}`);
});
process.on('SIGINT',()=>{
    serrver.close(()=>{
        console.log('Close Serrver');
        
    })
})