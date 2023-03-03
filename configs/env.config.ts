'user strick'
require('dotenv').config();
import {EnvironmentConfig} from '../src/models/SettingEnv'

const dev: EnvironmentConfig = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT || '3004') 
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: parseInt(process.env.DEV_DB_PORT || '2707'),
        name: process.env.DEV_DB_NAME || 'Shopro',
        use: process.env.DEV_DB_USER,
        pass: process.env.DEV_DB_PASSWORD
    },
    jwt: {
        secretKey: process.env.DEV_SECRETKEY
    }
};


const pro: EnvironmentConfig = {
    app: {
        port: parseInt(process.env.PRO_APP_PORT || '3005')
    },
    db: {
        host: process.env.PRO_DB_HOST || 'localhost',
        port:parseInt( process.env.PRO_DB_PORT || '2707'),
        name: process.env.PRO_DB_NAME || 'Shopro',
        use: process.env.PRO_DB_USER,
        pass: process.env.PRO_DB_PASSWORD
    },
    jwt: {
        secretKey: process.env.PRO_SECRETKEY
    }
};


type ConfigKey = 'dev' | 'pro';
const config: Record<ConfigKey, EnvironmentConfig> = {
  dev,
  pro,
};
const env = process.env.NODE_ENV as ConfigKey || 'dev';
export default config[env] as EnvironmentConfig;