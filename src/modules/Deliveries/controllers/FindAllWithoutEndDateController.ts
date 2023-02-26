import { FastifyReply, FastifyRequest } from 'fastify'
import DeliveriesRepository from '../repositories/DeliveriesRepository'
import { FindAllWithoutEndDateService } from '../services/FindAllWithoutEndDateService'

const deliveriesRepository = new DeliveriesRepository()

export class FindAllWithoutEndDateControlle {
  async handle(request?: FastifyRequest, reply?: FastifyReply) {
    const findAllWithoutEndDateService = new FindAllWithoutEndDateService(
      deliveriesRepository,
    )

    const deliveries = await findAllWithoutEndDateService.execute()

    return reply?.send(deliveries)
  }
}
