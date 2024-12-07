import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import type { AuthWithGoogleService } from '../../services/auth/google'

export class AuthWithGoogleController {
  constructor(private readonly authWithGoogleService: AuthWithGoogleService) {}

  async handle(
    request: FastifyRequest,
    reply: FastifyReply,
    app: FastifyInstance
  ) {
    try {
      const user = await this.authWithGoogleService.execute(request, app)

      reply.send(user)
    } catch (error) {
      console.log(error)
    }
  }
}
