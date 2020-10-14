import express from 'express';
import * as CommonController from './common.controller';

export const CommonRoutes = express.Router();

// ROUTES

// GET /hello
CommonRoutes.get('/hello', CommonController.hello);
