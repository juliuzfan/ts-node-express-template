import express from 'express';
import * as OtherController from './other.controller';

export const OtherRoutes = express.Router();

// GET /resource
OtherRoutes.get('/resource', OtherController.resourceHandler);

// POST /resource
OtherRoutes.post('/resource', OtherController.resourceHandler)

// PUT /resource
OtherRoutes.put('/resource', OtherController.resourceHandler);

// DELETE resource
OtherRoutes.delete('/resource', OtherController.resourceHandler);
