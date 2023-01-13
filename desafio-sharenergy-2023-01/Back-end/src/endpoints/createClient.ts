import { Request, Response } from "express"
import ClientDatabase from "../class/ClientDatabase"
import { Client } from "../class/Client"

const createClient = async (req: Request, res: Response) =>{
    let errorCode = 400
    const {cpf, fullName, email, phoneNumber, zipCode, street, houseNumber, district} = req.body

    try{
        if(!cpf && !fullName && !email && !phoneNumber && !zipCode && !street && !houseNumber && !district){
            errorCode= 422
            throw new Error("It is necessary to inform the following parameters to complete the request: cpf, fullName, email, phoneNumber, zipCode, street, houseNumber and district.")            
        } if(!cpf){
            errorCode= 422
            throw new Error("Cpf required.")            
        }if(!fullName){
            errorCode= 422
            throw new Error("Full name required.")            
        }if(!email){
            errorCode= 422
            throw new Error("E-mail required.")            
        }if(!phoneNumber){
            errorCode= 422
            throw new Error("Phone number required.")            
        }if(!zipCode){
            errorCode= 422
            throw new Error("Zip code required.") 
        }if(!street){
            errorCode= 422
            throw new Error("Name of the street required.")
        }if(!houseNumber){
            errorCode= 422
            throw new Error("House number required.")
        }if(!district){
            errorCode= 422
            throw new Error("Name of the district required.")
        }

        const clientDB = new ClientDatabase()
        const getClients = await clientDB.getAllClients()

        const existingClient = getClients.filter(client => client.cpf.toString() === cpf)

        if(existingClient.length > 0){
            errorCode= 409
            throw new Error("This client already exists.")            
        }
        
        const client = new Client(
            Date.now().toString(),
            Number(cpf),
            fullName,
            email,
            Number(phoneNumber),
            Number(zipCode),
            street,
            Number(houseNumber),
            district
        )

        clientDB.createClient(client)

        res.status(201).end()

    }catch(err: any){
        res.status(errorCode).send(err.message)
    }
}

export default createClient