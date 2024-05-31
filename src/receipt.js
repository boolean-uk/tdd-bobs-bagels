export default printReceipt
import data from '../inventory.json' assert { type: 'json' }
const { inventory } = data

function printReceipt(summary) {
  let now = new Date()
  let year = now.getFullYear()
  let month = padToTwoDigits(now.getMonth() + 1)
  let day = padToTwoDigits(now.getDate())
  let hours = padToTwoDigits(now.getHours())
  let minutes = padToTwoDigits(now.getMinutes())
  let seconds = padToTwoDigits(now.getSeconds())

  console.log(
    `\t~~~ Bob's Bagels ~~~ \n \t${day}-${month}-${year} ${hours}:${minutes}:${seconds} \n \t-------------------- 
          `
  )
  let overallDiscount = 0
  Object.entries(summary).forEach((property) => {
    if (property[0] === 'totalPrice') {
      console.log(`\t-------------------- \n \tTotal: £${property[1]}`)
      console.log(`You saved a total of £${Math.abs(overallDiscount).toFixed(2)}`)
      return
    }
    let bagelName = ''
    switch (property[0]) {
      case 'BGLO':
        bagelName = 'Onion Bagel'
        break
      case 'BGLP':
        bagelName = 'Plain Bagel'
        break
      case 'BGLE':
        bagelName = 'Everything Bagel'
        break
      case 'COF':
        bagelName = 'Coffee'
        break
      case 'CFBP':
        bagelName = 'Coffee/Bagel Offer'
    }
    console.log(
      `\t${bagelName}  ${property[1].quantity}  £${property[1].price.toFixed(2)}`
    )
    if (getUndiscountedPrice(property) > property[1].price.toFixed(2)) {
      overallDiscount -= (getUndiscountedPrice(property) - property[1].price).toFixed(2)
      console.log(`\t \t \t - (£${(getUndiscountedPrice(property) - property[1].price).toFixed(2)})`)
    }
    
    
  })
  console.log('\t--------------------')
  console.log('\tThanks for your order!')
}

function padToTwoDigits(num) {
  return num.toString().padStart(2, '0')
}

function getUndiscountedPrice(property) {
  if (property[0] === 'CFBP') {
    return (property[1].quantity * (0.39 + 0.99)).toString()
  }
  const bagel = inventory.find(bagel => bagel.sku === property[0])
  return (property[1].quantity * bagel.price).toFixed(2)
}