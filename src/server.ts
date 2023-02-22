import fastify from 'fastify'
import { clientsRoutes } from './routes/clients.routes'
const app = fastify({ logger: false })

app.register(clientsRoutes, {
  prefix: 'clients',
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
