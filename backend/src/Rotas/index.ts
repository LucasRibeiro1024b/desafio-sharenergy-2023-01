import {Router ,Request, Response } from 'express'

const router = Router();

router.get("/", async (req : Request, res : Response)=>{
    res.send({"msg":"você está conectado"})
})


export default router;