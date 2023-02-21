import fastify from 'fastify'

const app = fastify({ logger: false })

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
