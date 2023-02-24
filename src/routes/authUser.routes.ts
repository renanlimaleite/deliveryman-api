import { FastifyInstance } from 'fastify'
import { AuthenticateUserController } from '../modules/Account/Auth/User/controller/AuthenticateUserController'

const authenticateUserController = new AuthenticateUserController()

export async function AuthClientRoutes(app: FastifyInstance) {
  app.post('/', authenticateUserController.handle)
}
