import fastify from 'fastify'
import { authDeliverymanRoutes } from './routes/authDeliveryman.routes'
import { AuthClientRoutes } from './routes/authUser.routes'
import { clientsRoutes } from './routes/clients.routes'
import { deliveriesRoutes } from './routes/deliveries.routes'
import { deliverymanRoutes } from './routes/deliveryman.routes'
const app = fastify({ logger: false })

app.register(clientsRoutes, {
  prefix: 'clients',
})

app.register(AuthClientRoutes, {
  prefix: 'client/auth',
})

app.register(deliverymanRoutes, {
  prefix: 'deliveryman',
})

app.register(authDeliverymanRoutes, {
  prefix: 'deliveryman/auth',
})

app.register(deliveriesRoutes, {
  prefix: 'delivery',
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
