import "reflect-metadata";
import { createKoaServer, useContainer } from "routing-controllers";
import Container from "typedi";

/**
 *@author xiaoheshang_56@163.com
 * @class AppServer
 */
class Main {

  app: any;
  constructor() {
    this.config();
    this.app = createKoaServer({
      routePrefix: "/api",
      controllers: [__dirname + "/controllers/*.ts"]
    });
  }
  config() {
    useContainer(Container);
  }
  start(): void {
    this.app.listen(3000, () => {
      console.log("服务启动成功!!! http://127.0.0.1:3000");
    });
  }
};
new Main().start();