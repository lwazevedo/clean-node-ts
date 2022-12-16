import { describe, expect, it } from 'vitest'
import Initial from '@src/index'

describe('test vitest', () => {
  it('should create new initial and return up', () => {
    const init = new Initial()
    expect(init.start()).toBe('up')
  })
})
