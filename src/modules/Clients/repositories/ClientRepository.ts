import { prisma } from '../../../database/prismaClient'

interface ICreateClientDTO {
  username: string
  hashPassword: string
}

class ClientRepository {
  async create({ username, hashPassword }: ICreateClientDTO) {
    return await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    })
  }

  async findByUsername() {
    return await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    })
  }
}

export default ClientRepository
