import Koa from "koa";

export default class AppServer {

  constructor(ctx: Koa.Context) {
    console.log(ctx.path);

  }




}