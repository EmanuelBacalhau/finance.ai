import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { IUserRepository } from '../../repositories/interfaces/i-user-repository'

interface GoogleUser {
  name: string
  email: string
  picture: string
}

export class AuthWithGoogleService {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(request: FastifyRequest, app: FastifyInstance) {
    const {
      token: { access_token },
    } = await app.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request)

    const userInfo = await this.getUserInfo(access_token)

    const user = await this.userRepository.findByEmail(userInfo.email)

    if (!user) {
      return await this.userRepository.create({
        name: userInfo.name,
        email: userInfo.email,
        avatarUrl: userInfo.picture,
        amount: 0,
      })
    }

    return user
  }

  async getUserInfo(accessToken: string) {
    const response = await fetch(
      'https://www.googleapis.com/oauth2/v1/userinfo',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to get user info')
    }

    const userInfo = (await response.json()) as GoogleUser

    return userInfo
  }
}
