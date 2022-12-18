import { User } from '@/domain/entity/user'
import { RepositoryUser } from '@/domain/repository/repository-user'
import { RepositoryUserMemory } from '@/infra/database/in-memory/repository-user-memory'
import { beforeAll, describe, expect, it } from 'vitest'
import { FindAll } from './find-all'

describe('FindAll', () => {
  let userRepository: RepositoryUser
  let findAll: FindAll

  beforeAll(async () => {
    const users = [new User('any_name', 'any_email')]
    userRepository = new RepositoryUserMemory(users)
    findAll = new FindAll(userRepository)
  })
  it('should find all users', async () => {
    const [users] = await findAll.exec()
    expect(users.Email).toEqual('any_email')
    expect(users.Name).toEqual('any_name')
  })
})
