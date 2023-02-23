import { prisma } from '../../../database/prismaClient'
import { ICommonRepository } from '../../CommonRepository/UserCommonRepository'

interface ICreateClientDTO {
  username: string
  hashPassword: string
}

class ClientRepository implements ICommonRepository {
  async create({ username, hashPassword }: ICreateClientDTO) {
    return await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    })
  }

  async findByUsername(username: string) {
    return await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    })
  }
}

export default ClientRepository
