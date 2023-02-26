/* eslint-disable camelcase */
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

  async getDeliveriesByIdClient(id_client: string) {
    return await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    })
  }
}

export default ClientRepository
