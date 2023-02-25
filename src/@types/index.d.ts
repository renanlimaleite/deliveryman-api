// eslint-disable-next-line no-unused-vars
import fastify from 'fastify'
declare module 'fastify' {
  export interface FastifyRequest {
    id_client: string
  }
}
