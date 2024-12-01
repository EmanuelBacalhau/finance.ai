import type { FastifyInstance } from 'fastify'
import { authGoogleController } from '../container'
import { authRouter } from './authRouter'

export function router(app: FastifyInstance) {
  authRouter(app)
}
