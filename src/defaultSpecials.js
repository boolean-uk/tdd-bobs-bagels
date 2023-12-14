import Special from "./specials.js"

const defaultSpecials = [
  new Special("BGLO", (amount, price) => {
    const numOfSpecials = parseInt(Math.floor( amount / 6 ))
    const numOfNormalRate = amount - numOfSpecials
    return {
      originalTotal: amount * price,
      actualTotal: numOfSpecials * 2.49 + numOfNormalRate * price
    }
  }),
  new Special("BGLP", (amount, price) => {
    const numOfSpecials = parseInt(Math.floor( amount / 12 ))
    const numOfNormalRate = amount - numOfSpecials
    return {
      originalTotal: amount * price,
      actualTotal: numOfSpecials * 3.99 + numOfNormalRate * price
    }
  }),
  new Special("BGLE", (amount, price) => {
    const numOfSpecials = parseInt(Math.floor( amount / 6 ))
    const numOfNormalRate = amount - numOfSpecials
    return {
      originalTotal: amount * price,
      actualTotal: numOfSpecials * 3.49 + numOfNormalRate * price
    }
  })
]

export default defaultSpecials