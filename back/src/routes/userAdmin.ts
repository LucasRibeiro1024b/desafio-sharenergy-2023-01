import { Router } from "express"
import { z } from "zod"

import { adminController } from "../controller/userAdminController"
import { UserAdmin } from "../entity/UserAdmin"

export const adminRouter = Router()
const adminCtrl = new adminController()

adminRouter.post("/login", async (req, res) => {
  try{
    const loginData = z.object({
      username: z.string().min(5),
      password: z.string().min(5),
    })

    const { username, password } = req.body

    const response = await adminCtrl.recoverAllAdmins()

    if (response.length === 0) {
      const newAdmin = new UserAdmin("desafiosharenergy", "sh@r3n3rgy")
      const admin = await adminCtrl.save(newAdmin)

      if (admin !== null && admin.password === password && admin.username === username) {
        res.json(admin)
      }
      else res.status(401).json({message: "The user is not registred"})
    } else {
      const admin = await adminCtrl.recoverByUsername(username)
      
      if (admin !== null && admin.password === password && admin.username === username) {
        res.json(admin)
      }
      else res.status(401).json({message: "The user is not registred"})
    }
  }catch{
    res.status(404).json({message: "Something is wrong"})
}
})
