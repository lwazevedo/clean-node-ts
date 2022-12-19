import { Router } from 'express'

export default (router: Router): void => {
  router.get('/', async (req, res) => res.status(200).json({ up: 'up' }))
}
