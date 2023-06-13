import { Cart } from "../utils/Cart";
import {items} from '../utils/product'


test('Add new item to the list', () =>{
    const orders = items.map(item => {return {...item, quantity : 10}})
    const cart  = new Cart(orders)
    const newItem = {
        id: 'uniqid',
        image: 'white_walker', name:'White Walker',
        currentPrice: 1800, previousPrice: 1980, quantity: 2
    }

    const newList = cart.addNewItem(newItem)
    expect(newList.length).toEqual(orders.length + 1)
})

test('Removes item from list', () =>{
    const orders = items.map(item => {return {...item, quantity : 10}})
    const cart  = new Cart(orders)
    
    const newList = cart.removeItem(orders[0])
    expect(newList.length).toEqual(orders.length - 1)
})

test('Decrements item quantity', () =>{
    const orders = items.map(item => {return {...item, quantity : 10}})
    const cart  = new Cart(orders)

    const newList = cart.decrementItemQuantity(orders[0])
    expect(newList[0].quantity).toEqual(9)
})
test('Decrements quantity depending on last updated value', () =>{
    const orders = items.map(item => {return {...item, quantity : 10}})
    const cart  = new Cart(orders)
    
    let newList = cart.decrementItemQuantity(orders[0])
    newList = cart.decrementItemQuantity(orders[0])
    newList = cart.decrementItemQuantity(orders[0])
    newList = cart.decrementItemQuantity(orders[0])
    newList = cart.decrementItemQuantity(orders[0])
    newList = cart.decrementItemQuantity(orders[0])




    expect(newList[0].quantity).toEqual(4)
})

test('Decrements quantity only upto 0', () =>{
    const orders = items.map(item => {return {...item, quantity : 2}})
    const cart  = new Cart(orders)

    let newList = cart.decrementItemQuantity(orders[0])
    newList = cart.decrementItemQuantity(orders[0])
    newList = cart.decrementItemQuantity(orders[0])

    const newQuantity = newList[0].quantity
    expect(newQuantity).toEqual(0)
})

test('Increments item quantity', () =>{
    const orders = items.map(item => {return {...item, quantity : 10}})
    const cart  = new Cart(orders)

    const newList = cart.incrementItemQuantity(orders[0])
    expect(newList[0].quantity).toEqual(11)
})

test('Increments quantity based on last update', () =>{
    const orders = items.map(item => {return {...item, quantity : 10}})
    const cart  = new Cart(orders)

    let newList = cart.incrementItemQuantity(orders[0])

    newList = cart.incrementItemQuantity(orders[0])
    newList = cart.incrementItemQuantity(orders[0])
    newList = cart.incrementItemQuantity(orders[0])
    newList = cart.incrementItemQuantity(orders[0])
    newList = cart.incrementItemQuantity(orders[0])


    expect(newList[0].quantity).toEqual(16)
})

test('Gets correct total quantity of items in car', () =>{
    const orders = items.map(item => {return {...item, quantity : 10}})
    const cart = new Cart(orders)

    const totalQuantity = cart.getTotalQuantity()
    
    expect(totalQuantity).toEqual(40)
})

test('Calculates order total correctly', () =>{
    const orders = items.map(item => {return {...item, quantity : 10}})
    const cart = new Cart(orders)

    const orderTotal = cart.calculateOrderToTal()
    expect(orderTotal).toEqual(67000)
})