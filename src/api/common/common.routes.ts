import express from 'express';
import * as CommonController from './common.controller';

export const CommonRoutes = express.Router();

// GET import log
CommonRoutes.get('/hello', CommonController.hello);
