import Koa from "koa";
/**
 *
 * @todo 
 * @export
 * @class AppServer
 */
export default class AppServer {


  constructor(ctx: Koa.Context) {
    console.log(ctx.path);

  }




}