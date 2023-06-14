import {Product} from '../utils/Item'

test('Calculates dicsount correctly', () =>{
    const comodity = {
        currentPrice: 1200, previousPrice: 1500
    }
    const item = new Product(comodity)

    expect(item.calculateDiscount()).toBe(-20)
})

test('Throws error if current price ' 
     + 'is not less than previous price', () =>{

    const comodity = {
        currentPrice: 1800, previousPrice: 1500
    }
    const item = new Product(comodity)

    expect(() =>item.calculateDiscount()).toThrow()
})