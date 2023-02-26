/* eslint-disable camelcase */
import { FastifyReply, FastifyRequest } from 'fastify'
import ClientRepository from '../repositories/ClientRepository'
import { ClientFindAllDeliveriesService } from '../services/ClientFindAllDeliveriesService'

const clientRepository = new ClientRepository()

export class ClientFindAllDeliveriesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id_client } = request

      const clientFindAllDeliveriesService = new ClientFindAllDeliveriesService(
        clientRepository,
      )

      const deliveries = await clientFindAllDeliveriesService.execute(id_client)

      return reply.status(201).send(deliveries)
    } catch (err) {
      if (err instanceof Error) {
        return reply.status(401).send({ error: err.message })
      }
      return reply.status(500).send({ error: 'Internal server error ' })
    }
  }
}
