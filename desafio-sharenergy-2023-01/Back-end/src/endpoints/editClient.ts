import { Request, Response } from "express"
import ClientDatabase from "../class/ClientDatabase"


const editClient = async (req: Request, res: Response)=>{
    let errorCode = 400
    const clientId = req.params.clientId as string
    const {fullName, email, phoneNumber, zipCode, street, houseNumber, neighbourhood} = req.body

    try{
        
        if(!clientId){
            errorCode= 422
            throw new Error("Client id required.")
        }if(!fullName && !email && !phoneNumber && !zipCode && !street && !houseNumber && !neighbourhood){
            errorCode= 422
            throw new Error("It is necessary to inform at least one of the following parameters to complete the request: fullName, email, phoneNumber, zipCode, street, houseNumber or neighbourhood.")
        }

        const clientDB = new ClientDatabase()
        const getClients = await clientDB.getAllClients()

        const existingClient = getClients.filter(client => client.id.toString() === clientId)

        if(existingClient.length < 1){
            errorCode= 404
            throw new Error("Client not found.")            
        }

        if(fullName){ 
            await clientDB.editClient(clientId, "full_name", fullName)  
        }if(email){        
            await clientDB.editClient(clientId, "email", email)         
        }if(phoneNumber){ 
            await clientDB.editClient(clientId, "phone_number", phoneNumber)                   
        }if(zipCode){            
            await clientDB.editClient(clientId, "zip_code", Number(zipCode))   
        }if(street){            
            await clientDB.editClient(clientId, "street", street)           
        }if(houseNumber){           
            await clientDB.editClient(clientId, "house_number", Number(houseNumber))         
        }if(neighbourhood){           
            await clientDB.editClient(clientId, "neighbourhood", neighbourhood)      
        }

        res.status(200).end()        
    }catch(err: any){
        res.status(errorCode).send(err.message)
    }
}

export default editClient