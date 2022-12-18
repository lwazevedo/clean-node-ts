import { User } from '@/domain/entity/user'
import { RepositoryUser } from '@/domain/repository/repository-user'
import { beforeAll, describe, expect, it } from 'vitest'
import { RepositoryUserMemory } from './repository-user-memory'

describe('RepositoryUserMemory', () => {
  let userRepository: RepositoryUser
  beforeAll(async () => {
    const users = [new User('any_name', 'any_email')]
    userRepository = new RepositoryUserMemory(users)
  })
  it('should find all users', async () => {
    const [users] = await userRepository.findAll()
    expect(users.Email).toEqual('any_email')
    expect(users.Name).toEqual('any_name')
  })
})
