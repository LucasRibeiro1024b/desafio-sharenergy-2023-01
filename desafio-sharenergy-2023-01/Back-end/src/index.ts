import app from "./app"
import createClient from "./endpoints/createClient"
import deleteClient from "./endpoints/deleteClient"
import getAllClients from "./endpoints/getAllClients"
import getClient from "./endpoints/getClient"

app.get("/clients", getAllClients)

app.get("/clients/:clientId", getClient)

app.post("/clients", createClient)

app.delete("/clients/delete", deleteClient)
