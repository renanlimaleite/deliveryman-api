import { prisma } from '../../../database/prismaClient'
import { ICommonRepository } from '../../CommonRepository/UserCommonRepository'

interface ICreateClientDTO {
  username: string
  hashPassword: string
}

class DeliverymanRepository implements ICommonRepository {
  async create({ username, hashPassword }: ICreateClientDTO) {
    return await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    })
  }

  async findByUsername(username: string) {
    return await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    })
  }
}

export default DeliverymanRepository
