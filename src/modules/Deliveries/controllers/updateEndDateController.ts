/* eslint-disable camelcase */
import { FastifyReply, FastifyRequest } from 'fastify'
import DeliveriesRepository from '../repositories/DeliveriesRepository'
import { UpdateEndDateService } from '../services/UpdateEndDateService'

const deliveriesRepository = new DeliveriesRepository()

interface IUpdateEndDate {
  id: string
}

export class UpdateEndDateController {
  async handle(
    request: FastifyRequest<{ Params: IUpdateEndDate }>,
    reply: FastifyReply,
  ) {
    const { id_deliveryman } = request
    const { id: id_delivery } = request.params

    const updateEndDateService = new UpdateEndDateService(deliveriesRepository)

    const delivery = await updateEndDateService.execute({
      id_delivery,
      id_deliveryman,
    })

    return reply.send(delivery)
  }
}
