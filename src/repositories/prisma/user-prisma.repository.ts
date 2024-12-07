import type { PrismaClient } from '@prisma/client/extension'
import type {
  CreateUser,
  CreateUserResponse,
  FindUserByIdResponse,
  IUserRepository,
} from '../interfaces/i-user-repository'

export class UserPrismaRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(params: CreateUser): Promise<CreateUserResponse> {
    return await this.prisma.user.create({
      data: {
        ...params,
      },
      select: {
        id: true,
        name: true,
        amount: true,
        avatarUrl: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    })
  }

  async findById(id: string): Promise<FindUserByIdResponse | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        amount: true,
        avatarUrl: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    return user
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    })

    return user
  }
}
