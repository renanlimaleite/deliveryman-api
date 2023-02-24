import { FastifyInstance } from 'fastify'
import { AuthenticateDeliverymanController } from '../modules/Account/Auth/Deliveryman/controller/AuthenticateDeliverymanController'

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController()

export async function authDeliverymanRoutes(app: FastifyInstance) {
  app.post('/', authenticateDeliverymanController.handle)
}
