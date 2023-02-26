/* eslint-disable camelcase */
import { FastifyReply, FastifyRequest } from 'fastify'
import DeliverymanRepository from '../repositories/DeliverymanRepository'
import { FindAllDeliveriesService } from '../services/FindAllDeliveriesService'

const deliverymanRepository = new DeliverymanRepository()

export class FindAllDeliveriesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id_deliveryman } = request

      const findAllDeliveriesService = new FindAllDeliveriesService(
        deliverymanRepository,
      )

      const deliveries = await findAllDeliveriesService.execute(id_deliveryman)

      return reply.status(201).send(deliveries)
    } catch (err) {
      if (err instanceof Error) {
        return reply.status(401).send({ error: err.message })
      }
      return reply.status(500).send({ error: 'Internal server error ' })
    }
  }
}
