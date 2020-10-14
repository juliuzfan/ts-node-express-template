import * as moduleAlias from 'module-alias';

if (process.env.NODE_ENV == 'prod' || process.env.NODE_ENV == 'production') {
   moduleAlias.addAliases({
      '@app':           __dirname,
      '@api':           __dirname + '/api',
      '@config':        __dirname + '/config/index',
      '@middlewares':   __dirname + '/api/middlewares',
      '@models':        __dirname + '/models',
      '@services':      __dirname + '/services',
      '@utils':         __dirname + '/utils',
      '@views':         __dirname + '/views'
   });
}

import express, { Application, Request, Response, NextFunction } from 'express';
import config from './config';
import { ApiRoutes } from './api';
import { default as cors } from 'cors';
// import * as Eta from "eta";

const App: Application = express();
 
// EXPRESS CONFIG
App.use((req: Request, res: Response, next: NextFunction) => { res.setHeader('X-Powered-By', 'Ublux'); next(); });
// use cors middleware
App.use(cors());
// Uncomment to use template engine Eta (www.eta.js.org)
// App.engine('eta', Eta.renderFile);
// App.set('view engine', 'eta');
// App.set('views', `${__dirname}/views`);

// ROUTER
App.use('', ApiRoutes);

App.get('/', (req: Request, res: Response) => {
   res.send(config.service.name);
});

// EXPRESS START!
App.listen(config.port, config.host, () => {
   console.log(
      `${'∙'.repeat(80)}\n`,
      `🚀 ${config.service.name} - ${config.service.version}. Ready @ http://${config.host}:${config.port}`, 
      `\n${'∙'.repeat(80)}\n`
   );
});
