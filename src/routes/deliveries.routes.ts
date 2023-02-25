import { FastifyInstance } from 'fastify'
import { CreateDeliveryController } from '../modules/Deliveries/controllers/CreateDeliveryController'

const createDeliveryController = new CreateDeliveryController()

export async function deliveriesRoutes(app: FastifyInstance) {
  app.post('/', createDeliveryController.handle)
}
