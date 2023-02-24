import { FastifyInstance } from 'fastify'
import { CreateDeliverymanController } from '../modules/Deliveryman/controllers/CreateDeliverymanController'

const createDeliverymanController = new CreateDeliverymanController()

export async function deliverymanRoutes(app: FastifyInstance) {
  app.post('/', createDeliverymanController.handle)
}
