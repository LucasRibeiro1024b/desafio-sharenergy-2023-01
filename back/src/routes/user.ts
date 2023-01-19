import { Router } from "express"
import { z } from "zod"

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
    const createUserZod = z.object({
      name: z.string().min(3),
      password: z.string().min(5),
      email: z.string().email(),
      cpf: z.string().min(14).max(14),
      addres: z.string().min(1),
      phone: z.string().min(14).max(16),  
    })

    const { name, password, email, cpf, addres, phone } = createUserZod.parse(req.body)

    const checkIfEmailWasRegistred = await userCtrl.recoverUser(email, cpf)

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
    const editUserZod = z.object({
      name: z.string().min(3),
      password: z.string().min(5),
      email: z.string().email(),
      cpf: z.string().min(14).max(14),
      addres: z.string().min(1),
      phone: z.string().min(14).max(16),   
    })

    const { name, password, email, cpf, addres, phone } = editUserZod.parse(req.body)

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
    const deleteUserZod = z.object({
      email: z.string().email(),
      cpf: z.string().min(14).max(14),  
    })

    const { email, cpf } = deleteUserZod.parse(req.body)

    const userSelected = await userCtrl.recoverUser(email, cpf)

    if (userSelected !== null) {
      const userDeleted = await userCtrl.delete(userSelected)

      res.json(userDeleted)
    } else res.status(401).json({message: "Sorry the user was not founded"})
  } catch {
    res.status(401).json({message: "Sorry the user was not founded"})
  }
})
