import { Router } from "express"
import { userController, IDataUser} from "../controller/userController"
import { User } from "../entity/User"

export const userRouter = Router()
const userCtrl = new userController()

userRouter.get("/", async (req, res) => {
  try{
    const response = await userCtrl.recoverAllUsers()
    res.json(response)
  }catch{
    res.status(404).json({message: "Something is wrong"})
  }
})

userRouter.post("/", async (req, res) => {
  try{
    const { name, password, email, cpf, addres, phone } = req.body

    const checkIfEmailWasRegistred = await userCtrl.recoverByEmail(email)

    if (checkIfEmailWasRegistred !== undefined){
      const userForRegister = new User(name, email, phone, addres, cpf, password)

      const userRegistred = await userCtrl.save(userForRegister)

      if (userRegistred !== undefined) res.json(userRegistred)
      res.status(401).json({message: "Something is wrong"})
    }
    res.status(401).json({message: "the email is even registred in system"})
  }catch{
    res.status(404).json({message: "Something is wrong"})
  }
})

userRouter.post("/update", async (req, res) => {
  try{
    const { name, password, email, cpf, addres, phone } = req.body

    const data: IDataUser = {
      name, password, email, cpf, addres, phone
    }

    const userSelected = await userCtrl.recoverByEmail(email)

    if (userSelected !== undefined) {
      const userUpdated = await userCtrl.update(userSelected, data)

      res.json(userUpdated)
    }

    res.status(401).json({message: "Sorry the user is not founded"})
  }catch{
    res.status(404).json({message: "Something is wrong"})
  }
})