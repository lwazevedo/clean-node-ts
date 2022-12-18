import { describe, expect, it } from 'vitest'
import { User } from './user'

describe('User domain entity', () => {
  it('should create user valid', () => {
    const name = 'fulano'
    const email = 'fulano@email.com'

    const user = new User(name, email)
    expect(user.Name).toEqual(name)
    expect(user.Email).toEqual(email)
  })
})
