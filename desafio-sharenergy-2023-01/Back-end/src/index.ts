import app from "./app";
import createClient from "./endpoints/createClient";

app.post("/clients", createClient)