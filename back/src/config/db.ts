import { AppDataSource } from '../data-source'

export const conectBdToServer = async () => {
  // inicia o banco quando necessário
  const conect = await AppDataSource.initialize()
  console.log(`App conectado ao banco ${conect.options.database}`)

  // fecha a conexão depois de usar
  process.on("SIGINT", () => {
    conect.destroy().then(() => console.log('Conexão com o banco encerrada'))
  })
}