import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status-codes';
import config from '@config';

// Import Log
export const hello = async (req: Request, res: Response, next: NextFunction) => {
   
   const errorCondition = false;

   if (!errorCondition) {
      res.status(httpStatus.OK).json({
         service: config.service,
         status: true,
         message: 'Error description'
      });
   } else {
      res.status(httpStatus.NOT_FOUND).json({
         service: config.service,
         status: false,
      });
   }
   next();
};
