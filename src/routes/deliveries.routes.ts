import { FastifyInstance } from 'fastify'
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient'
import { CreateDeliveryController } from '../modules/Deliveries/controllers/CreateDeliveryController'
import { FindAllWithoutEndDateControlle } from '../modules/Deliveries/controllers/FindAllWithoutEndDateController'

const createDeliveryController = new CreateDeliveryController()
const findAllWithoutEndDateControlle = new FindAllWithoutEndDateControlle()

export async function deliveriesRoutes(app: FastifyInstance) {
  app.post('/', {
    preValidation: [ensureAuthenticateClient],
    handler: createDeliveryController.handle,
  })

  app.get('/available', findAllWithoutEndDateControlle.handle)
}
