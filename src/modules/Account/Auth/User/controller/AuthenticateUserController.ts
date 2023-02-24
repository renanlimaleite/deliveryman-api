import { FastifyReply, FastifyRequest } from 'fastify'
import AuthenticateUserRepository from '../repositories/AuthenticateUserRepository'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

interface IAuthenticateDTO {
  username: string
  password: string
}

const authenticateUserRepository = new AuthenticateUserRepository()

export class AuthenticateUserController {
  async handle(
    request: FastifyRequest<{ Body: IAuthenticateDTO }>,
    reply: FastifyReply,
  ) {
    try {
      const { username, password } = request.body

      const authenticateUserService = new AuthenticateUserService(
        authenticateUserRepository,
      )

      const result = await authenticateUserService.execute({
        username,
        password,
      })

      return reply.status(201).send(result)
    } catch (err) {
      if (err instanceof Error) {
        return reply.status(401).send({ error: err.message })
      }
      return reply.status(500).send({ error: 'Internal server error ' })
    }
  }
}
