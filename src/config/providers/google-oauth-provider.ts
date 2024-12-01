import OAuth2 from '@fastify/oauth2'
import type { FastifyInstance } from 'fastify'
import { env } from '../../env'

export function googleOAuthProvider(app: FastifyInstance) {
  app.register(OAuth2, {
    name: 'googleOAuth2',
    scope: ['profile', 'email'],
    credentials: {
      client: {
        id: env.GOOGLE_CLIENT_ID,
        secret: env.GOOGLE_CLIENT_SECRET,
      },
      auth: OAuth2.GOOGLE_CONFIGURATION,
    },
    startRedirectPath: '/login/google',
    callbackUri: `${env.BASE_URL}/login/google/callback`,
  })
}
