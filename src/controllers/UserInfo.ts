import Koa from "koa";
import { Router } from "../utils/decorators";
import { HTTPMethod } from "../utils/Requerst";


export default class UserInfo {


  /**
   *
   * @router get /api/UserInfo/get
   * @param {Koa.Context} ctx
   * @memberof UserInfo
   */
  @Router(HTTPMethod.GET, "/getuserinfo")
  public get(ctx: Koa.Context) {
    const param = ctx.request.query;
    console.log(param);
    let Requerst = null;
    if (param != null || param != {}) {
      Requerst = { code: 0 }
    } else {
      Requerst = { code: 10 }
    }
    ctx.body = Requerst;
  }



}