import { FastifyInstance } from 'fastify'
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient'
import { CreateDeliveryController } from '../modules/Deliveries/controllers/CreateDeliveryController'

const createDeliveryController = new CreateDeliveryController()

export async function deliveriesRoutes(app: FastifyInstance) {
  app.post('/', {
    preValidation: [ensureAuthenticateClient],
    handler: createDeliveryController.handle,
  })
}
