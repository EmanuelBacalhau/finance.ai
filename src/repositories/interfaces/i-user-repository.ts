export interface User {
  id: string
  name: string
  amount: number
  avatarUrl: string
  email: string
  password?: string
  createdAt: Date
  updateAt: Date
}

export type CreateUser = Omit<User, 'id' | 'createdAt' | 'updateAt'>
export type CreateUserResponse = Omit<User, 'password'>

export type FindUserByIdResponse = Omit<User, 'password'>
export type FindUserByEmailResponse = Omit<User, 'password'>

export interface IUserRepository {
  create(params: CreateUser): Promise<CreateUserResponse>
  findById(id: string): Promise<FindUserByIdResponse | null>
  findByEmail(email: string): Promise<User | null>
}
