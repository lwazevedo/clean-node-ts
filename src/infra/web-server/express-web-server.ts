import { TMethod, WebServer } from '@/domain/web-server/web-server'
import express, { Express, Request, Response } from 'express'

export class ExpressWebServer implements WebServer {
  private app: Express

  constructor() {
    this.app = express()
    this.app.use(express.json())
  }
  addRoute(
    method: TMethod,
    url: string,
    cb: (p: unknown, b: unknown) => unknown
  ): void {
    this.app[method](url, async function (req: Request, res: Response) {
      const output = await cb(req.params, req.body)
      res.json(output)
    })
  }
  start(port: number): void {
    this.app.listen(port, () => {
      console.log('Server listening on port: ' + port)
    })
  }
  public getApp(): Express {
    return this.app
  }
}
