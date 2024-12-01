import type { FastifyInstance } from 'fastify'
import { authGoogleController } from '../container'

export function authRouter(app: FastifyInstance) {
  app.get('/login/google/callback', async (request, reply) => {
    return await authGoogleController.handle(request, reply, app)
  })
}
