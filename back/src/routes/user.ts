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

    const checkIfEmailWasRegistred = await userCtrl.recoverUser(email, cpf)

    console.log(checkIfEmailWasRegistred)
    if (checkIfEmailWasRegistred === null){
      const userForRegister = new User(name, email, phone, addres, cpf, password)

      const userRegistred = await userCtrl.save(userForRegister)

      if (userRegistred !== null) res.json(userRegistred)
      else res.status(401).json({message: "Something is wrong"})
    }
    else res.status(401).json({message: "the email or cpf even was registred in system"})
  }catch{
    res.status(404).json({message: "Something is wrong"})
  }
})

userRouter.put("/", async (req, res) => {
  try{
    const { name, password, email, cpf, addres, phone } = req.body

    const data: IDataUser = {
      name, password, email, cpf, addres, phone
    }

    const userSelected = await userCtrl.recoverUser(email, cpf)

    if (userSelected !== null) {
      const userUpdated = await userCtrl.update(userSelected, data)

      res.json(userUpdated)
    } else res.status(401).json({message: "Sorry the user was not founded"})
  }catch{
    res.status(404).json({message: "Something is wrong"})
  }
})

userRouter.delete("/", async (req, res) => {
  try {
    const { email, cpf } = req.body

    const userSelected = await userCtrl.recoverUser(email, cpf)

    if (userSelected !== null) {
      const userDeleted = await userCtrl.delete(userSelected)

      res.json(userDeleted)
    } else res.status(401).json({message: "Sorry the user was not founded"})
  } catch {
    res.status(401).json({message: "Sorry the user was not founded"})
  }
})
