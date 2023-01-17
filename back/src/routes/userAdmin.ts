import { Router } from "express"
import { adminController } from "../controller/userAdminController"
import { UserAdmin } from "../entity/UserAdmin"

export const adminRouter = Router()
const adminCtrl = new adminController()

adminRouter.post("/login", async (req, res) => {
  try{
    const { username, password } = req.body

    const response = await adminCtrl.recoverAllAdmins
    if (response.length === 0) {
      const newAdmin = new UserAdmin("desafiosharenergy", "sh@r3n3rgy")

      adminCtrl.save(newAdmin)
    } 

    const admin = await adminCtrl.recoverByUsername("username")

    if (admin.password === password && admin.username === username) {
      res.json(admin)
    }
    else res.status(401).json({message: "The user is not registred"})
  }catch{
    res.status(404).json({message: "Something is wrong"})
}
})