const { add, basketReset } = require('../../src/basket.js')

describe('add ', () => {
  beforeEach(() => {
    basketReset()
  })

  it('should add the bagel object', () => {
    const result = add('bagel')
    expect(result).toEqual([
      {
        sku: '',
        price: '',
        name: '',
        variant: ''
      }
    ])
  })

  // it('should remove bagel from basket', ()=>{
  //   const result = remove({
  //       expect(result).ToDo(

  //       )
  //   })
  // })
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
