import { FastifyInstance } from 'fastify'
import { CreateClientController } from '../modules/Clients/controller/CreateClientController'

const createClienteController = new CreateClientController()

export async function clientsRoutes(app: FastifyInstance) {
  app.post('/', createClienteController.handle)
}
