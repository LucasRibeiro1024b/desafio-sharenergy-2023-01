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

  /* async recoverByName(username: string) {
    const usernameCheck = await AppDataSource.manager.findOne(User, {where: {name: username}})
    return usernameCheck
  }

  async checkUsernameIsUnique(usernameToCheck: string) {
    const allUsers = await this.recoverAllUsersToCheck()
    let haveSameUsername = false

    allUsers.map((value, index) => {
      if(value.name === usernameToCheck) {
        haveSameUsername = true
      }
    })

    return allUsers
  }

  async recoverAllUsersToCheck() {
    const users = await AppDataSource.manager.find(User)
    return users
  }

  async recoverUserById(id: number) {
    const user = await AppDataSource.manager.findOne(User, {relations: ['account'], where: {id: id}})
    return user
  } */
}