import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm"

@Entity()
export class User {
    constructor(name: string, email: string, phone: string, addres: string, cpf: string, password: string) {
        this.name = name
        this.email = email
        this.phone = phone
        this.addres = addres
        this.cpf = cpf
        this.password = password
    }

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    addres: string

    @Column()
    cpf: string

    @Column()
    password: string

}
