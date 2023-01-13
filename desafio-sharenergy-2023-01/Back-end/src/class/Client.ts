export class Client {
    constructor(
        private id: string,
        private cpf: number, 
        private name: string, 
        private email: string, 
        private phone_number: number, 
        private zip_code: number, 
        private street: string, 
        private house_number: number, 
        private district: string){
    }
}