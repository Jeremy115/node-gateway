import { JsonController, Method, QueryParams, Body } from 'routing-controllers';
import { HTTPMethod } from '../utils/Requerst';
import UserService from '../Services/userService';
import UserModel from '../models/userModel';
import Log4js from 'koa-log4';

@JsonController('/users')
export default class UserController {
  log4 = Log4js.getLogger('userInfo');
  constructor(private userService: UserService) {}

  /**
   *
   *
   * @param {*} data
   * @returns
   * @memberof UserController
   */
  @Method(HTTPMethod.GET, '/getuserinfo')
  public async get(@QueryParams() data: any) {
    this.log4.info('sssss', data);
    let code: Number = 0;
    let Msg = '成功';
    return { data, code, Msg };
  }

  /**
   * login
   */
  @Method(HTTPMethod.POST, '/login')
  public login(@Body() parse: UserModel) {
    let data = null;
    try {
      data = this.userService.save(parse);
    } catch (error) {
      console.log(error);
    }
    return { data };
  }
}
