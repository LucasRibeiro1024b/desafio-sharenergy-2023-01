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

  async recoverUser(email: string, cpf: string) {
    const usernameCheckEmail = await AppDataSource.mongoManager.findOne(User, {
      where: {email: email}
    })
    
    const usernameCheckCpf = await AppDataSource.mongoManager.findOne(User, {
      where: {cpf: cpf}
    })
    if (usernameCheckEmail === null && usernameCheckCpf === null) {
      return null
    }
    return usernameCheckCpf === null ? usernameCheckEmail : usernameCheckCpf
  }

  async update(user: User, value: IDataUser) {
    const updated = await AppDataSource.mongoManager.update(User, user.id, {
      ...value,
      id: user.id,
    })
    return updated
  }

  async delete(user: User) {
    const deleted = await AppDataSource.mongoManager.delete(User, {...user})
    return deleted
  }
}
