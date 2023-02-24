import { prisma } from '../../../../../database/prismaClient'
import { ICommonRepository } from '../../../../CommonRepository/UserCommonRepository'

export class AuthenticateDeliverymanRepository implements ICommonRepository {
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

export default AuthenticateDeliverymanRepository
