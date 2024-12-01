import { PrismaClient } from '@prisma/client'
import { AuthWithGoogleController } from './controllers/auth/google'
import { UserPrismaRepository } from './repositories/prisma/user-prisma.repository'
import { AuthWithGoogleService } from './services/auth/google'

const prisma = new PrismaClient()

// Repositories
const userRepository = new UserPrismaRepository(prisma)

// Services
const authGoogleService = new AuthWithGoogleService(userRepository)

// Controllers
export const authGoogleController = new AuthWithGoogleController(
  authGoogleService
)
