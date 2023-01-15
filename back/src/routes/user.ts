import { Router } from "express"
import { userController } from "../controller/userController"
import { User } from "../entity/User"

export const userRouter = Router()
const userCtrl = new userController()

userRouter.get("/", async (req, res) => {
  const newUser = new User("test1", "test@test.com", "37123456789", "alameda", "10010010099")
  userCtrl.save(newUser)

  const response = await userCtrl.recoverAllUsers()
  res.json(response)
})