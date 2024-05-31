export default printReceipt

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

  Object.entries(summary).forEach((property) => {
    if (property[0] === 'totalPrice') {
      console.log(`\t-------------------- \n \tTotal: £${property[1]}`)
      return
    }
    switch (property[0]) {
      case 'BGLO':
        property[0] = 'Onion Bagel'
        break
      case 'BGLP':
        property[0] = 'Plain Bagel'
        break
      case 'BGLE':
        property[0] = 'Everything Bagel'
        break
      case 'COF':
        property[0] = 'Coffee'
        break
      case 'CFBP':
        property[0] = 'Coffee/Bagel Offer'
    }
    console.log(
      `\t${property[0]}  ${property[1].quantity}  £${property[1].price.toFixed(
        2
      )}`
    )
  })
  console.log('\t--------------------')
  console.log('\tThanks for your order!')
}

function padToTwoDigits(num) {
    return num.toString().padStart(2, '0')
  }