import app from "./app"
import createClient from "./endpoints/createClient"
import deleteClient from "./endpoints/deleteClient"
import editClient from "./endpoints/editClient"
import getAllClients from "./endpoints/getAllClients"
import getClient from "./endpoints/getClient"


app.get("/clients", getAllClients)

app.get("/clients/:clientId", getClient)

app.post("/clients", createClient)

app.patch("/clients/:clientId", editClient)

app.delete("/clients/delete", deleteClient)

