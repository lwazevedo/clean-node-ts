import { ExpressWebServer } from './infra/web-server/express-web-server'

const init = () => {
  const server = new ExpressWebServer()
  server.addRoute('get', '/', () => 'hellow')
  server.start(3000)
}

init()
