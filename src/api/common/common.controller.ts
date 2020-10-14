import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status-codes';
import config from '@config';

// Hello Controller
export const hello = async (req: Request, res: Response, next: NextFunction) => {
   
   const errorCondition = false;

   if (!errorCondition) {
      res.status(httpStatus.OK).json({
         service: config.service,
         status: true,
         message: `Hello World!`
      });
   } else {
      res.status(httpStatus.NOT_FOUND).json({
         service: config.service,
         status: false,
         message: 'Nobody home. Goodbye!'
      });
   }
   next();
};
