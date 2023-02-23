import { FastifyInstance } from 'fastify'
import { AuthenticateUserController } from '../modules/Account/Auth/controller/AuthenticateUserController'

const authenticateUserController = new AuthenticateUserController()

export async function AuthRoutes(app: FastifyInstance) {
  app.post('/', authenticateUserController.handle)
}
