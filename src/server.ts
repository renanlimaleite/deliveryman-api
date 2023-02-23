import fastify from 'fastify'
import { AuthRoutes } from './routes/auth.routes'
import { clientsRoutes } from './routes/clients.routes'
const app = fastify({ logger: false })

app.register(clientsRoutes, {
  prefix: 'clients',
})

app.register(AuthRoutes, {
  prefix: 'auth',
})

const start = async () => {
  try {
    await app.listen({ port: 3000 })
    console.log('App running...')
  } catch (e) {
    app.log.error(e)
    process.exit(1)
  }
}

start()
