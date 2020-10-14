import express from 'express';
import { CommonRoutes } from './common/common.routes';
import { OtherRoutes } from './other/other.routes';

import * as bodyParser  from 'body-parser';

export const ApiRoutes = express.Router();

// MIDDLEWARES (GLOBAL)
ApiRoutes.use(bodyParser.json({limit: '5mb'}));
ApiRoutes.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

// ROUTES
// Common
ApiRoutes.use('', CommonRoutes);
// Other
ApiRoutes.use('/other', OtherRoutes);