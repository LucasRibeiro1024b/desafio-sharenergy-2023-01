import { AppDataSource } from "../data-source";
import { UserAdmin } from "../entity/UserAdmin";

export class adminController {

  async save(UserAdmin: UserAdmin) {
    const userSave = await AppDataSource.mongoManager.save(UserAdmin)
    return userSave
  }

  async recoverAllAdmins() {
    const users = await AppDataSource.mongoManager.find(UserAdmin)
    return users
  }

  async recoverByUsername(username: string) {
    const usernameCheck = await AppDataSource.mongoManager.findOne(UserAdmin, {where: {username: username}})
    return usernameCheck
  }

}