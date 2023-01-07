import { PrismaClient } from '@prisma/client'
import { Cliente } from '../../Domain/Interfaces/Cliente';
import IPaginacao from '../../Domain/Interfaces/Paginacao';
import { Repository } from '../../Domain/Interfaces/Repositorio';
import Retorno from '../../Domain/Interfaces/Retorno';


class ClienteRepository implements Repository<Cliente> {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  //#region TODO: Criar um cliente na base
  async criar(data: Cliente) {
    await this.prisma.$connect()
    const cliente = await this.prisma.cliente.create({
      data: {
        cpf: data.cpf,
        email: data.email,
        nome: data.nome,
        telefone: data.telefone,
        endereco: {
          create:
          {
            bairro: data.endereco?.bairro ? data.endereco?.bairro : "",
            cidade: data.endereco?.cidade ? data.endereco?.cidade : "",
            rua: data.endereco?.rua ? data.endereco?.rua : "",
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
    return returnUser?.id;
  }
  //#endregion


  //#region TODO: Buscar clientes
  async findMany(query?: IPaginacao | undefined): Promise<Retorno<any>> {
    await this.prisma.$connect()
    const total = await this.prisma.cliente.count()
    const pagina = query && (query.skip - 1 as number) * total
    const clientes = await this.prisma.cliente.findMany({
      include: {
        endereco: true,
      },
      skip: pagina,
      take: query?.take ? query?.take : 5,
    })

    const retorno = {
      dados: clientes,
      total
    }

    this.desconectar()
    return retorno
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



  private async desconectar() {
    await this.prisma.$disconnect();
  }

}


export default ClienteRepository;

