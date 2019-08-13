import { Controller, Method } from "routing-controllers";
import { HTTPMethod } from "../utils/Requerst";
import { Service } from "typedi";
import UserService from "../Services/userService";
import UserModel from "../models/userModel";


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