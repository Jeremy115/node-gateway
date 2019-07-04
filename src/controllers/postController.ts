import { Controller, Method } from "routing-controllers";
import { HTTPMethod } from "../utils/Requerst";
import { Service } from "typedi";
import UserService from "../Service/userService";
import UserModel from "../model/userModel";


@Service()
@Controller("/prower")
export default class PostController {
  constructor(private userService: UserService) { }

  @Method(HTTPMethod.POST, "/getaaaa")
  getAAA() {
    let user = new UserModel("", "");
    return this.userService.save(user);
  }

}