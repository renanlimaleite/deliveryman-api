import { prisma } from '../../../../database/prismaClient'
import { ICommonRepository } from '../../../CommonRepository/UserCommonRepository'

export class AuthenticateUserRepository implements ICommonRepository {
  async findByUsername(username: string) {
    return await prisma.clients.findFirst({
      where: {
        username: {
          contains: username,
          mode: 'insensitive',
        },
      },
    })
  }
}

export default AuthenticateUserRepository
