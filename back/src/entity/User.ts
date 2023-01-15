import { Entity, ObjectIdColumn, ObjectID, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    constructor(name: string, email: string, phone: string, adress: string, cpf: string) {
        this.name = name
        this.email = email
        this.phone = phone
        this.adress = adress
        this.cpf = cpf
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    adress: string

    @Column()
    cpf: string

}
