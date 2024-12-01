import type { FastifyInstance } from 'fastify'

export function router(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    reply.send({ message: 'hello world' })
  })
}
