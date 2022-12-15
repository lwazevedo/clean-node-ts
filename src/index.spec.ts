import Initial from '@/index'

describe('Initial', () => {
  it('shoul be start', () => {
    const initial = new Initial()
    expect(initial.start()).toBe('up')
  })
})
