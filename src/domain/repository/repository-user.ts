import { User } from '../entity/user'

export interface RepositoryUser {
  findAll(): Promise<User[]>
}
