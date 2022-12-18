export class User {
  constructor(private readonly name: string, private readonly email: string) {}

  get Name() {
    return this.name
  }

  get Email() {
    return this.email
  }
}
