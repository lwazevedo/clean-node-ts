import express, { Express, RequestHandler, Router } from 'express'
import { existsSync, readdirSync } from 'fs'
import { join } from 'path'

export class ExpressServer {
  private app: Express
  private dirRoutes = './express-routes-app'
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.addRoutes()
  }

  start(port: number) {
    this.app.listen(port, () =>
      console.log(`server on port http://localhost:${port}/api`)
    )
  }

  private addRoutes() {
    const router = Router()
    if (!this.routeDirExists() || !this.routesDirIsEmpty()) {
      throw new Error(
        'route directory does not exist or no cut file has been created.'
      )
    }
    readdirSync(join(__dirname, this.dirRoutes))
      .filter((file) => !file.endsWith('.map'))
      .map(async (file) => {
        ;(await import(`./express-routes-app/${file}`)).default(router)
      })
    this.app.use('/api', router)
  }

  private addMw(mw: RequestHandler) {
    this.app.use(mw)
  }

  private routesDirIsEmpty(): boolean {
    return readdirSync(join(__dirname, this.dirRoutes)).length > 0
  }
  private routeDirExists(): boolean {
    return existsSync(join(__dirname, this.dirRoutes))
  }
}
