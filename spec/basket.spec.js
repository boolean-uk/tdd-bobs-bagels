import { Bagel } from '../src/basket.js'

describe('Bagel', () => {
  let bagel

  beforeEach(() => {
    bagel = new Bagel('BGLO',2)
  })

  it('should exist', () => {
    expect(bagel).toBeInstanceOf(Bagel)
  })
    
    it('should have properties -sku - qty -name -price -variant', () => {
        expect(bagel.sku).toBe('BGLO')
        expect(bagel.qty).toBe(2)
    })
})
