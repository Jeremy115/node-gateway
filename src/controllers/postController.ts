import { Controller, Method } from "routing-controllers";
import { HTTPMethod } from "../utils/Requerst";
import UserService from "../Services/userService";
import UserModel from "../models/userModel";


@Controller("/prowar")
export default class PostController {

  constructor() {

  }

  @Method(HTTPMethod.POST, "/getaaaa")
  public getAAA(): any {
    let userService = new UserService();

    let user = new UserModel("", "");
    return userService.save(user);
  }

}