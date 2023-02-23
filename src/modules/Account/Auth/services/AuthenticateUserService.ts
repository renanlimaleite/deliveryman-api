import AuthenticateUserRepository from '../repositories/AuthenticateUserRepository'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateUserDTO {
  username: string
  password: string
}

export class AuthenticateUserService {
  constructor(private authenticateUserRepository: AuthenticateUserRepository) {
    this.authenticateUserRepository = authenticateUserRepository
  }

  async execute({ username, password }: IAuthenticateUserDTO) {
    const client = await this.authenticateUserRepository.findByUsername(
      username,
    )

    if (!client) {
      throw new Error('Username or password invalid')
    }

    const passwordMatch = await compare(password, client.password)

    if (!passwordMatch) {
      throw new Error('Username or password invalid')
    }

    // then, generate token
    const token = sign({ username }, '94a08da1fecbb6e8b46990538c7b50b2', {
      subject: client.id,
      expiresIn: '1d',
    })

    return token
  }
}
