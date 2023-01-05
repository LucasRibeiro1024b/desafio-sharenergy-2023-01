import { PrismaClient } from '@prisma/client'
import { Cliente } from '../../Domain/Interfaces/Cliente';
import { Repository } from '../../Domain/Interfaces/Repositorio';


class ClienteRepository implements Repository<Cliente> {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  //#region TODO:criar um cliente na base
  async criar(data: Cliente){
   await this.prisma.$connect()
   const cliente = await this.prisma.cliente.create({
      data :{
        cpf : data.cpf,
        email : data.email,
        nome : data.nome,
        telefone : data.telefone,
        endereco : {
          create:
             {
              bairro : data.endereco?.bairro ? data.endereco?.bairro : "" ,
              cidade : data.endereco?.cidade  ? data.endereco?.cidade : "",
              rua : data.endereco?.rua  ? data.endereco?.rua : "",
            },

        }
      }
    })

    const returnUser = await this.prisma.cliente.findUnique({
      where: {
        id: cliente.id,
      },
      include: {
        endereco: true
      },
    })
    this.desconectar()
    return returnUser?.id ;
  }
//#endregion

  async buscarPorId(id: string): Promise<Cliente | null> {
    throw new Error('Method not implemented.');
  }
  async update(id: string, data: Cliente): Promise<Cliente | null> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  async findMany(query?: object | undefined): Promise<Cliente[]> {
    throw new Error('Method not implemented.');
  }


  private  async desconectar(){
    await this.prisma.$disconnect();
  }

}


export default ClienteRepository;

