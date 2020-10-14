import express, {  Request, Response, NextFunction } from 'express';
import * as OtherController from './other.controller';
import config from '@config';

export const OtherRoutes = express.Router();

// GET ping
OtherRoutes.get('/ping', OtherController.ping);

// POST authorization
OtherRoutes.post('/authorization', OtherController.authorization)

// GET callback
OtherRoutes.get('/callback', OtherController.callback);

// GET authorized
OtherRoutes.get('/authorized', OtherController.authorized);
