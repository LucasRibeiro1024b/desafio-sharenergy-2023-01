import BaseDatabase from "../class/BaseDatabase"

const printError=(err: any)=> {console.log(err.sqlMessage || err.message)}

const createTable= async ()=>{ 
    await BaseDatabase.connection.raw(`
        CREATE TABLE Clients (
            cpf BIGINT(12) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(100) NOT NULL,
            phone_number BIGINT(14) NOT NULL,
            zip_code INT(8) NOT NULL,
            street VARCHAR(100) NOT NULL,
            house_number SMALLINT(5) NOT NULL,
            district VARCHAR(50) NOT NULL
        );
    `)
}

const finish = async () => await BaseDatabase.connection.destroy()

createTable()
.then(() => console.log("Entity created."))
.catch(()=> console.log(printError))
.finally(finish)