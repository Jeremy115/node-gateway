import { Service } from "typedi";
import UserModel from "../models/userModel";

@Service()
export default class UserService {
  constructor() { }
  categories: Array<UserModel> = [];

  public save(category: UserModel) {
    this.categories.push(category);
    return this.categories;
  }
}