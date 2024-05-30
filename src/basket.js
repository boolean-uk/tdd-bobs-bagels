import allBagels from '../inventory.json' assert {type: 'json'}

allBagels.inventory.forEach(bg => {
    bg.price = parseFloat(bg.price)
})

class Bagel{
    constructor()
}
