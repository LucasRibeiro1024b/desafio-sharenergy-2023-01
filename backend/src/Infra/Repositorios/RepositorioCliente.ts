import { PrismaClient } from '@prisma/client'
import { Cliente } from '../../Domain/Interfaces/Cliente';
import { Repository } from '../../Domain/Interfaces/Repositorio';


class ClienteRepository implements Repository<Cliente> {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async criar(data: Cliente){
   const cliente = await this.prisma.cliente.create({
      data :{
        cpf : data.cpf,
        email : data.email,
        nome : data.nome,
        telefone : data.telefone,
        endereco : {
          create:
             {
              bairro : data.endereco?.bairro as string,
              cidade : data.endereco?.cidade  as string,
              rua : data.endereco?.rua  as string,
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

    return returnUser ;
  }
  async read(id: string): Promise<Cliente | null> {
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


}


export default ClienteRepository;

