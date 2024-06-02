import BagelBakery from '../src/basket.js'

describe('BagelBakery', () => {
  let bagelBakery
  beforeEach(() => {
    bagelBakery = new BagelBakery()
  })

  it('should exist', () => {
    expect(bagelBakery).toBeInstanceOf(BagelBakery)
  })

  it('should create a new item', () => {
    const item = bagelBakery.addItem('salt')

    expect(item.id).toBe(1)
    expect(item.type).toBe('salt')
    expect(item.quantity).toBe(1)
    expect(item.price).toBe(0.65)
  })
  // ---------
})
