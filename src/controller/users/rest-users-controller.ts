import { WebServer } from '@/domain/web-server/web-server'
import { FindAll } from '@/usecases/users/find-all'

export class RestUsersController {
  constructor(readonly http: WebServer, readonly findAllUsers: FindAll) {
    http.addRoute('get', '/', async () => findAllUsers.exec())
  }
}
