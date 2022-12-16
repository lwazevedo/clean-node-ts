export type TMethod = 'get' | 'post' | 'patch' | 'delete'
export interface WebServer {
  addRoute(
    method: TMethod,
    url: string,
    cb: (p: unknown, b: unknown) => unknown
  ): void
  start(port: number): void
}
