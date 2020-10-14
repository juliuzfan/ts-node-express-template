import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status-codes';
import config from '@config';

// Resource Handler Controller
export const resourceHandler = async (req: Request, res: Response, next: NextFunction) => {
   
   const errorCondition = false;

   if (!errorCondition) {
      res.status(httpStatus.OK).json({
         service: config.service,
         status: true,
         message: `${req.method}: Resource`
      });
   } else {
      res.status(httpStatus.NOT_FOUND).json({
         service: config.service,
         status: false,
         message: 'Resourcer not found. Goodbye!'
      });
   }
   next();
};
