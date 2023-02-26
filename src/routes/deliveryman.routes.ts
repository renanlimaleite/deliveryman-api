import { FastifyInstance } from 'fastify'
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman'
import { CreateDeliverymanController } from '../modules/Deliveryman/controllers/CreateDeliverymanController'
import { FindAllDeliveriesController } from '../modules/Deliveryman/controllers/FindAllDeliveriesController'

const createDeliverymanController = new CreateDeliverymanController()
const clientFindAllDeliveriesController = new FindAllDeliveriesController()

export async function deliverymanRoutes(app: FastifyInstance) {
  app.post('/', createDeliverymanController.handle)

  app.get('/deliveries', {
    preHandler: [ensureAuthenticateDeliveryman],
    handler: clientFindAllDeliveriesController.handle,
  })
}
