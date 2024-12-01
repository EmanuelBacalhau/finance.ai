import cors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import Fastify from 'fastify'
import { googleOAuthProvider } from './config/providers/google-oauth-provider'
import { env } from './env'
import { router } from './routes'

const server = Fastify()

server.register(cors)
server.register(router)
googleOAuthProvider(server)
server.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

async function start() {
  const PORT = env.PORT

  server.listen({
    port: PORT,
    host: '0.0.0.0',
  })

  console.log(`🚀 Server listening on http://localhost:${PORT}`)
}

start()
