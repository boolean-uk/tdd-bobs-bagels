const { add, basketReset, remove, changeOrder } = require('../../src/basket.js')

describe('add ', () => {
  beforeEach(() => {
    basketReset()
  })

  it('should add the bagel object', () => {
    const result = add({
      sku: 'BGLP',
      price: '',
      name: '',
      variant: ''
    })
    expect(result).toEqual([
      {
        sku: 'BGLP',
        price: '',
        name: '',
        variant: ''
      }
    ])
  })
})

it('should remove bagel from basket', () => {
  const result = add({
    sku: 'BGLO',
    price: '',
    name: '',
    variant: ''
  })
  const result2 = add({
    sku: 'BGLP',
    price: '',
    name: '',
    variant: ''
  })
  const bagelRemove = remove('BGLO')
  expect(bagelRemove).toEqual([
    {
      sku: 'BGLP',
      price: '',
      name: '',
      variant: ''
    }
  ])
  it('should remove bagel by sku and replace it with new bagel', () => {
    const updatedBasket = changeOrder()
    expect(updatedBasket).toBe()
  })
})

// const { createToDo, getAll, setComplete } = require('../src/todolist')

// describe('createToDo', () => {
//   it('should create a ToDo item ', () => {
//     const result = createToDo('ToDo created')

//     expect(result).toEqual({
//       id: 1,
//       description: 'write code',
//       status: 'incomplete'
//     })
//   })
// })
