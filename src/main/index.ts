import { RestUsersController } from '@/controller/users/rest-users-controller'
import { User } from '@/domain/entity/user'
import { RepositoryUserMemory } from '@/infra/database/in-memory/repository-user-memory'
import { ExpressWebServer } from '@/infra/web-server/express-web-server'
import { FindAll } from '@/usecases/users/find-all'

const init = () => {
  const users = new User('fulano', 'fulano@g.com')
  const repository = new RepositoryUserMemory([users])
  const findAllUser = new FindAll(repository)

  const server = new ExpressWebServer()
  new RestUsersController(server, findAllUser)
  server.start(3000)
}

init()
