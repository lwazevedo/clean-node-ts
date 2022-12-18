import { ExpressWebServer } from '@/infra/web-server/express-web-server'
import { FindAll } from '@/usecases/users/find-all'
import { beforeAll, describe, expect, it } from 'vitest'
import { RestUsersController } from './rest-users-controller'

describe('RestUsersController', () => {
  let server: ExpressWebServer
  let find: FindAll

  beforeAll(() => {
    server = new ExpressWebServer()
  })

  it('should be defined route rest user controllers', () => {
    const rest = new RestUsersController(server, find)
    expect(rest).toBeDefined()
  })
})
