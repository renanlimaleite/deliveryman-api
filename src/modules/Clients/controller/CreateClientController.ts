import { FastifyReply, FastifyRequest } from 'fastify'
import ClientRepository from '../repositories/ClientRepository'
import { CreateClientService } from '../services/CreateClientService'

const clientRepository = new ClientRepository()

interface ICreateClientDTO {
  username: string
  password: string
}

export class CreateClientController {
  async handle(
    request: FastifyRequest<{ Body: ICreateClientDTO }>,
    reply: FastifyReply,
  ) {
    try {
      const { username, password } = request.body

      const createClientService = new CreateClientService(clientRepository)

      const result = await createClientService.execute({
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
