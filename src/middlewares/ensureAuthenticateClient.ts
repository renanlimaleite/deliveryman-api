import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export async function ensureAuthenticateClient(
  request: FastifyRequest,
  reply: FastifyReply,
  next: HookHandlerDoneFunction,
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return reply.status(401).send({ error: 'Token missing' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub } = verify(
      token,
      '94a08da1fecbb6e8b46990538c7b50b2',
    ) as IPayload

    request.id_client = sub
    next()
  } catch (err) {
    return reply.status(401).send({ error: 'Invalid token' })
  }
}
