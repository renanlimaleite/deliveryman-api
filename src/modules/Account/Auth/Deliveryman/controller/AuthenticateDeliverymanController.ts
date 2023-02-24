import { FastifyReply, FastifyRequest } from 'fastify'
import DeliverymanRepository from '../repositories/DeliverymanRepository'
import { AuthenticateDeliverymanService } from '../services/AuthenticateDeliverymanService'

const deliverymanRepository = new DeliverymanRepository()

interface IAuthenticateDeliverymanDTO {
  username: string
  password: string
}

export class AuthenticateDeliverymanController {
  async handle(
    request: FastifyRequest<{ Body: IAuthenticateDeliverymanDTO }>,
    reply: FastifyReply,
  ) {
    try {
      const { username, password } = request.body

      const createDeliverymanService = new AuthenticateDeliverymanService(
        deliverymanRepository,
      )

      const result = await createDeliverymanService.execute({
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
