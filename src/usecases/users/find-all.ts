import { User } from '@/domain/entity/user'
import { RepositoryUser } from '@/domain/repository/repository-user'

export class FindAll {
  constructor(private readonly userRepository: RepositoryUser) {}

  async exec(): Promise<User[]> {
    const users = await this.userRepository.findAll()
    return users
  }
}
