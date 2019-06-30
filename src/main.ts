import Koa from "koa";
import bodify from "koa-body";
import serve from "koa-static";
import { load } from "./utils/decorators";
import { resolve } from "path";

/**
 *@author xiaoheshang_56@163.com
 * @class AppServer
 */
class Main {

  public app: Koa;
  constructor() {
    this.app = new Koa();
    this.config();
    this.routes();
  }
  routes() {
    let apps = load(resolve(__dirname, './Apps'));
    this.app.use(apps.routes());
    let router = load(resolve(__dirname, './controllers'));
    this.app.use(router.routes());
  }
  config() {
    this.app.use(serve(`${__dirname}/public`))
    this.app.use(
      bodify({
        multipart: true,
        strict: false
      })
    );
  }
  start(): void {
    this.app.listen(3000, () => {
      console.log("服务启动成功!!! http://127.0.0.1:3000");
    })
  }
}
const main = new Main();
main.start();