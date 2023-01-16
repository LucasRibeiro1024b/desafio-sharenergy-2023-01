import { Router } from "express"
import { userController } from "../controller/userController"
import { User } from "../entity/User"

export const userRouter = Router()
const userCtrl = new userController()

userRouter.get("/", async (req, res) => {
  try{
    const response = await userCtrl.recoverAllUsers()
    res.json(response)
  }catch{
    res.statusCode = 404
}
})