import { AppDataSource } from "../data-source";
import { UserAdmin } from "../entity/UserAdmin";

export class adminController {

  // salva o usuário
  async save(userAdmin: UserAdmin) {
    const userSave = await AppDataSource.mongoManager.save(userAdmin)
    return userSave
  }

  // busca todos os usuários
  async recoverAllAdmins() {
    const users = await AppDataSource.mongoManager.find(UserAdmin)
    return users
  }

  // busca usuários por nome
  async recoverByUsername(username: string) {
    const usernameCheck = await AppDataSource.mongoManager.findOne(UserAdmin, {
      where: {username: username}
    })
    return usernameCheck
  }

}