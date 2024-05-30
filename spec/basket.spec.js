import BagelList from '../src/basket.js'

describe('Bagel list', () => {
  let bagelList

  beforeEach(() => {
    bagelList = new BagelList()
  })

  it('bagel list exists and has items in it', () => {
    expect(bagelList).toBeInstanceOf(BagelList)
    expect(bagelList.length).toBe(7)
  })
})
