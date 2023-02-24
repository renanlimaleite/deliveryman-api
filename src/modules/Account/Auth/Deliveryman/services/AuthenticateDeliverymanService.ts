import AuthenticateDeliverymanRepository from '../repositories/DeliverymanRepository'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateDeliverymanDTO {
  username: string
  password: string
}

export class AuthenticateDeliverymanService {
  constructor(
    private authenticateDeliverymanRepository: AuthenticateDeliverymanRepository,
  ) {
    this.authenticateDeliverymanRepository = authenticateDeliverymanRepository
  }

  async execute({ username, password }: IAuthenticateDeliverymanDTO) {
    const deliveryman =
      await this.authenticateDeliverymanRepository.findByUsername(username)

    if (!deliveryman) {
      throw new Error('Username or password invalid')
    }

    const passwordMatch = await compare(password, deliveryman.password)

    if (!passwordMatch) {
      throw new Error('Username or password invalid')
    }

    // then, generate token
    const token = sign({ username }, '94a99da1fecbb6e8b77990538c7b50b2', {
      subject: deliveryman.id,
      expiresIn: '1d',
    })

    return token
  }
}
