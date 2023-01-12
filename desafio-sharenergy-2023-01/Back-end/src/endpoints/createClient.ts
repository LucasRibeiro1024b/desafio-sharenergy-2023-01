import { Request, Response } from "express"
import ClientDatabase from "../class/ClientDatabase"
import { Client } from "../class/Client"

const createClient = async (req: Request, res: Response) =>{
    let errorCode = 400
    const {cpf, name, email, phoneNumber, zipCode, street, houseNumber, district} = req.body

    try{
        
        const client = new Client(
            Number(cpf),
            name,
            email,
            Number(phoneNumber),
            Number(zipCode),
            street,
            Number(houseNumber),
            district
        )

        const clientDB = new ClientDatabase()

        clientDB.createClient(client)
        let getClients = await clientDB.getAllClients()

        console.log(getClients)

        res.status(201).send(getClients)

    }catch(err: any){
        res.status(errorCode).send(err.message)
    }
}

export default createClient