import Koa from "koa";
import bodify from "koa-body";
import serve from "koa-static";
import { load } from "./utils/decorators";
import { resolve } from "path";
import AppServer from "./Apps/App";
/**
 *@author xiaoheshang_56@163.com
 * @class AppServer
 */
class Main {

  public app: Koa;
  constructor() {
    this.app = new Koa();
    this.config();
    // this.tocken();
    this.routes();

  }
  tocken() {
    this.app.use(ctx => new AppServer(ctx))
  }
  routes() {

    [{ url: "/api", folderUrl: "./controllers" }].forEach(item => {
      const router = load(item.url, resolve(__dirname, item.folderUrl));
      this.app.use(router.routes());
    })
  }
  config() {
    // this.app.use(koaBody())
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