import path from 'path';
import * as dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import { Log } from '@app/utils/log';

const envFound = dotenv.config();

if (envFound.error) {
   // This error should crash whole process
   Log.error("🛑 Couldn't find .env file");
   process.exit(5);
}

const config = Object.freeze({
   // Service Information
   service: {
      name: 'My App Name',
      version: 'v1',
   },
   // IP
   port: Number(process.env.APP_PORT || 3000),
   host: process.env.APP_HOST || '0.0.0.0',
   // Used by winston logger
   logs: {
      level: process.env.LOG_LEVEL || 'warnings',
   },
   // API configs
   api: {
      appService: { 
         baseURL: process.env.APP_SERVICE_API_URL || 'http://127.0.0.1:4321',
         // baseURL: 'http://127.0.0.1:4321',
      }
   },
   // MySQL Database Connection
   mysql: {
      connectionLimit: Number(process.env.DB_CONN_LIMIT || 10),
      connectTimeout: 60 * 60 * 1000,
      acquireTimeout: 60 * 60 * 1000,
      timeout: 60 * 60 * 1000,
      host: process.env.MYSQL_DB_HOST || '127.0.0.1',
      user: process.env.MYSQL_DB_USER || 'username',
      password: process.env.MYSQL_DB_PASS || 'password',
      database: process.env.MYSQL_DB_NAME || 'dbname',
      port: Number(process.env.MYSQL_DB_PORT || 3306),
      timezone: process.env.MYSQL_DB_TOMEZONE || 'utc'
   },
   // REDIS Database Connection
   redis: {
      host: process.env.REDIS_DB_HOST || '127.0.0.1',
      port: process.env.REDIS_DB_PORT || 6379,
      password: process.env.REDIS_DB_PASS || '',
   },
   // Cryptography
   crypto: {
      algorithm: process.env.CRYPTO_ALGORITHM || 'aes-256-ctr',
      secretKey: process.env.CRYPTO_SECRET || 'VLxzlGd1PQlbFE4ZipX5YxyuKY5NNYMut9FptcHr',
   }
});

Log.ok('App Configuration Set');

export default config;