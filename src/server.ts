import cors from '@fastify/cors'
import Fastify from 'fastify'
import { env } from './env'
import { router } from './routes'

const server = Fastify()

server.register(cors)
server.register(router)

async function start() {
  const PORT = env.PORT

  server.listen({
    port: PORT,
    host: '0.0.0.0',
  })

  console.log(`🚀 Server listening on http://localhost:${PORT}`)
}

start()
