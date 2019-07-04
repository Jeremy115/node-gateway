import { JsonController, Get, Method, QueryParams, Body } from "routing-controllers";
import { HTTPMethod } from "../utils/Requerst";
import UserService from "../Service/userService";
import UserModel from "../model/userModel";


@JsonController("/users")
export default class UserController {

  constructor(private userService: UserService) { }
  /**
   *
   *
   * @param {number} id
   * @memberof UserController
   */
  @Get("/getuserinfo")
  public get(@QueryParams() data: any) {
    return { data }
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