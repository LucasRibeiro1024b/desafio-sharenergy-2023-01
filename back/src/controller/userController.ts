import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export class userController {

  async save(user: User) {
    const userSave = await AppDataSource.mongoManager.save(user)
    return userSave
  }

  async recoverAllUsers() {
    const users = await AppDataSource.mongoManager.find(User)
    return users
  }
}