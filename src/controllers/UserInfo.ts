import { BaseContext } from "koa";
import { Router, HTTPMethod, RequestMapping } from "../utils/decorators";
import { Request } from "express";

@RequestMapping("/user")
export default class UserInfo {

  constructor() { }
  /**
   *
   * @router get /api/UserInfo/get
   * @param {Koa.Context} ctx
   * @memberof UserInfo
   */
  @Router(HTTPMethod.GET, "/getuserinfo/:id")
  public get(@params("id")id:number) {
    console.log(id);
    
    // const param = ctx.request.query;
    // let Requerst = null;
    // if (Object.keys(param).length != 0) {
    //   Requerst = param;
    // } else {
    //   Requerst = { code: false }
    // }
    // console.log(Requerst);
    // ctx.body = Requerst;
  }
  /**
   * login
   */
  @Router(HTTPMethod.POST, "/login")
  public login(ctx: Request) {
    console.log(ctx);

    // ctx.status = 200;
    ctx.body = ctx;

  }
}