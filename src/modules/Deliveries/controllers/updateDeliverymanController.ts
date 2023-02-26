/* eslint-disable camelcase */
import { FastifyReply, FastifyRequest } from 'fastify'
import DeliveriesRepository from '../repositories/DeliveriesRepository'
import { UpdateDeliverymanService } from '../services/updateDeliverymanService'

const deliveriesRepository = new DeliveriesRepository()

interface IUpdateDeliverymanDTO {
  id: string
}

export class UpdateDeliveryController {
  async handle(
    request: FastifyRequest<{ Params: IUpdateDeliverymanDTO }>,
    reply: FastifyReply,
  ) {
    const { id_deliveryman } = request
    const { id: id_delivery } = request.params

    const updateDeliverymanService = new UpdateDeliverymanService(
      deliveriesRepository,
    )

    const delivery = await updateDeliverymanService.execute({
      id_delivery,
      id_deliveryman,
    })

    return reply.send(delivery)
  }
}
