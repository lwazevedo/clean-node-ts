import { User } from '@/domain/entity/user'
import { RepositoryUser } from '@/domain/repository/repository-user'

export class RepositoryUserMemory implements RepositoryUser {
  constructor(private readonly users: User[] = []) {}

  async findAll(): Promise<User[]> {
    return this.users
  }
}
