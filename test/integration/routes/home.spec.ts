import { beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'

import { ExpressWebServer } from '../../../src/infra/web-server/express-web-server'

describe('test home', () => {
  let app

  beforeAll(() => {
    const server = new ExpressWebServer()
    server.addRoute('get', '/', () => 'hellow')
    app = server.getApp()
  })

  it('should route home', async () => {
    const { body, status } = await request(app).get('/')
    console.log(body)
    expect(status).toBe(200)
    expect(body).toBe('hellow')
  }, 20000)
})
