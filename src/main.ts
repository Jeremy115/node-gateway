import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import Container from 'typedi';
import Log4js from 'koa-log4';

/**
 *@author xiaoheshang_56@163.com
 * @class AppServer
 */
class Main {
  app: any;
  logger = Log4js.getLogger('app');
  constructor() {
    this.app = createExpressServer({
      routePrefix: '/api',
      controllers: [__dirname + '/controllers/*.ts'],
    });
    this.config();
  }
  config() {
    useContainer(Container);
    this.app.use(Log4js.koaLogger(Log4js.getLogger('http'), { level: 'auto' }));
    this.app.use(async (ctx: any, next: Function) => {
      ctx.cookies.set('csrftoken', ctx.csrf, { httpOnly: false });
      if (ctx.method === 'GET') {

        console.log('csrftoken', ctx.response.status);
      } else {
      }
      await next();
    });
  }
  start(): void {
    this.app.listen(3000, () => {
      console.log(`[worker:%s]`, ' 服务启动成功!!! http://127.0.0.1:3000 ');
      this.logger.log('[worker:%s] web server start listen on %s', process.pid, '3000');
    });
  }
}
new Main().start();
