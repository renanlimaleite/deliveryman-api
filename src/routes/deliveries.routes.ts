import { FastifyInstance } from 'fastify'
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient'
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman'
import { CreateDeliveryController } from '../modules/Deliveries/controllers/CreateDeliveryController'
import { FindAllWithoutEndDateControlle } from '../modules/Deliveries/controllers/FindAllWithoutEndDateController'
import { UpdateDeliveryController } from '../modules/Deliveries/controllers/updateDeliverymanController'

const createDeliveryController = new CreateDeliveryController()
const findAllWithoutEndDateControlle = new FindAllWithoutEndDateControlle()
const updateDeliveryController = new UpdateDeliveryController()

export async function deliveriesRoutes(app: FastifyInstance) {
  app.post('/', {
    preValidation: [ensureAuthenticateClient],
    handler: createDeliveryController.handle,
  })

  app.get('/available', {
    preValidation: [ensureAuthenticateDeliveryman],
    handler: findAllWithoutEndDateControlle.handle,
  })

  app.put('/updateDeliveryman/:id', {
    preValidation: [ensureAuthenticateDeliveryman],
    handler: updateDeliveryController.handle,
  })
}
