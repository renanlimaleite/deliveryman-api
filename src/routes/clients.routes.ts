import { FastifyInstance } from 'fastify'
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient'
import { ClientFindAllDeliveriesController } from '../modules/Clients/controller/ClientFindAllDeliveriesController'
import { CreateClientController } from '../modules/Clients/controller/CreateClientController'

const createClienteController = new CreateClientController()
const clientFindAllDeliveriesController =
  new ClientFindAllDeliveriesController()

export async function clientsRoutes(app: FastifyInstance) {
  app.post('/', createClienteController.handle)

  app.get('/deliveries', {
    preHandler: [ensureAuthenticateClient],
    handler: clientFindAllDeliveriesController.handle,
  })
}
