import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status-codes';
import config from '@config';
import UbluxDB from '@services/mysql.db.service';

// Import Log
export const hello = async (req: Request, res: Response, next: NextFunction) => {

   const { username } = req.query;

   if (!username) {
      res.status(httpStatus.BAD_REQUEST).json({
         service: config.service,
         error: true,
         message: 'Username not specified'
      });
   }

   const dbResult = await UbluxDB.query(
      UbluxDB.mysql.format(
         'SELECT `id`, `source`, `status`, `total_items`, `fetched_items`, ' +
         '`transformed_items`, `imported_items`, `created`, `updated` ' +
         'FROM `contacts_queue` WHERE `user_id` = ? ORDER BY `created` DESC;', [username])
   ) as any[];

   if (dbResult.length) {
      res.status(httpStatus.OK).json({
         service: config.service,
         imports: dbResult
      });
   } else {
      res.status(httpStatus.NOT_FOUND).json({
         service: config.service,
         imports: []
      });
   }
   next();
};
