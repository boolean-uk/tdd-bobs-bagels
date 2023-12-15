import Special from "./specials.js"

const calcSpecial = (amount, price, piecesInSpecial, priceForSpecial) => {
  const numOfSpecials = parseInt(Math.floor( amount / piecesInSpecial ))
  const numOfNormalRate = amount - numOfSpecials * piecesInSpecial
  return {
    originalTotal: (amount * price).toFixed(2),
    actualTotal: (numOfSpecials * priceForSpecial + numOfNormalRate * price).toFixed(2)
  }
}

const defaultSpecials = [
  new Special("BGLO", (amount, price) => {
    const piecesInSpecial = 6
    const priceForSpecial = 2.49
    return calcSpecial(amount, price, piecesInSpecial, priceForSpecial)
  }),
  new Special("BGLP", (amount, price) => {
    const piecesInSpecial = 12
    const priceForSpecial = 3.99
    return calcSpecial(amount, price, piecesInSpecial, priceForSpecial)
  }),
  new Special("BGLE", (amount, price) => {
    const piecesInSpecial = 6
    const priceForSpecial = 2.49
    return calcSpecial(amount, price, piecesInSpecial, priceForSpecial)
  })
]

export default defaultSpecials