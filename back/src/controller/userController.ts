import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export interface IDataUser {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  addres: string;
  password: string;
}

export class userController {

  async save(user: User) {
    const userSave = await AppDataSource.mongoManager.save(user)
    return userSave
  }

  async recoverAllUsers() {
    const users = await AppDataSource.mongoManager.find(User)
    return users
  }

  async recoverByEmail(email: string) {
    const usernameCheck = await AppDataSource.mongoManager.findOne(User, {where: {email: email}})
    return usernameCheck
  }

  async update(user: User, value: IDataUser) {
    const update = await AppDataSource.mongoManager.update(User, user.id, {
      ...value
    })
    return update
  }
}
