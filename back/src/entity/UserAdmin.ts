import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm"

@Entity()
export class UserAdmin {
    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    username: string

    @Column()
    password: string

}
