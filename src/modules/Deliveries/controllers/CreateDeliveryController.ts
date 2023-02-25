/* eslint-disable camelcase */
import { FastifyReply, FastifyRequest } from 'fastify'
import DeliveriesRepository from '../repositories/DeliveriesRepository'
import { CreateDeliveryService } from '../services/CreateDeliveryService'

interface ICreateDeliveryDTO {
  id_client: string
  item_name: string
}

const deliveryRepository = new DeliveriesRepository()

export class CreateDeliveryController {
  async handle(
    request: FastifyRequest<{ Body: ICreateDeliveryDTO }>,
    reply: FastifyReply,
  ) {
    try {
      const createDeliveryService = new CreateDeliveryService(
        deliveryRepository,
      )

      const { id_client, item_name } = request.body

      const delivery = await createDeliveryService.execute({
        id_client,
        item_name,
      })

      return reply.send(delivery)
    } catch (err) {
      if (err instanceof Error) {
        return reply.status(400).send({ error: err.message })
      }
      return reply.status(500).send({ error: 'Internal server error ' })
    }
  }
}
