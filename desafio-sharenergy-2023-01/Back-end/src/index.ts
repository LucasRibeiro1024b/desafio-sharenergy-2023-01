import app from "./app"
import createClient from "./endpoints/createClient"
import deleteClient from "./endpoints/deleteClient"
import editClient from "./endpoints/editClient"
import getAllClients from "./endpoints/getAllClients"
import getClient from "./endpoints/getClient"

//Get All Clients
app.get("/clients", getAllClients)

//Get Client
app.get("/clients/:clientId", getClient)

//Create Client
app.post("/clients", createClient)

//Edit Client
app.patch("/clients/:clientId", editClient)

//Delete Client
app.delete("/clients/delete/:clientId", deleteClient)

