import { CartHandler } from "../utils/Cart";


test('Add new item to the list', () =>{
    const orders = [
        {
            id: 1, currentPrice: 1200, 
            previousPrice: 1500,quantity: 10,
        },
        {
            id: 2, currentPrice: 1300, 
            previousPrice: 1400,quantity: 10,
        },
        {
            id: 3, currentPrice: 900, 
            previousPrice: 600,quantity: 10,
        },
        {
            id: 4, currentPrice: 1700, 
            previousPrice: 2200,quantity: 10,
        },
        {
            id: 5, currentPrice: 700, 
            previousPrice: 900,quantity: 10,
        }
    ]
    const cart  = new CartHandler(orders)
    const newItem = {
        id: 'uniqid', currentPrice: 1800, 
        previousPrice: 1980, quantity: 2
    }

    const newList = cart.addNewItem(newItem)
    expect(newList.length).toEqual(orders.length + 1)
})

test('Throws error if item exists in ordersList', () =>{
    const orders = [
        {
            id: 1, currentPrice: 1200, 
            previousPrice: 1500,quantity: 10,
        },
        {
            id: 2, currentPrice: 1300, 
            previousPrice: 1400,quantity: 10,
        },
        {
            id: 3, currentPrice: 900, 
            previousPrice: 600,quantity: 10,
        },
        {
            id: 4, currentPrice: 1700, 
            previousPrice: 2200,quantity: 10,
        },
        {
            id: 5, currentPrice: 700, 
            previousPrice: 900,quantity: 10,
        }
    ]
    const cart  = new CartHandler(orders)

    expect(() =>cart.addNewItem(orders[0])).toThrowError()
})

test('Removes item from list', () =>{
    const orders = [
        {
            id: 1, currentPrice: 1200, 
            previousPrice: 1500,quantity: 10,
        },
        {
            id: 2, currentPrice: 1300, 
            previousPrice: 1400,quantity: 10,
        },
        {
            id: 3, currentPrice: 900, 
            previousPrice: 600,quantity: 10,
        },
        {
            id: 4, currentPrice: 1700, 
            previousPrice: 2200,quantity: 10,
        },
        {
            id: 5, currentPrice: 700, 
            previousPrice: 900,quantity: 10,
        }
    ]
    const cart  = new CartHandler(orders)
    
    const newList = cart.removeItem(1)
    expect(newList.length).toEqual(orders.length - 1)
})

test('Decrements item quantity', () =>{
    const orders = [
        {
            id: 1, currentPrice: 1200, 
            previousPrice: 1500,quantity: 10,
        },
        {
            id: 2, currentPrice: 1300, 
            previousPrice: 1400,quantity: 10,
        },
        {
            id: 3, currentPrice: 900, 
            previousPrice: 600,quantity: 10,
        },
        {
            id: 4, currentPrice: 1700, 
            previousPrice: 2200,quantity: 10,
        },
        {
            id: 5, currentPrice: 700, 
            previousPrice: 900,quantity: 10,
        }
    ]
    const cart  = new CartHandler(orders)

    const newList = cart.decrementItemQuantity(3)
    expect(newList[2].quantity).toEqual(9)
})

test('Decrements quantity only upto 1', () =>{
    const orders = [
        {
            id: 1, currentPrice: 1200, 
            previousPrice: 1500,quantity: 10,
        },
        {
            id: 2, currentPrice: 1300, 
            previousPrice: 1400,quantity: 2,
        },
        {
            id: 3, currentPrice: 900, 
            previousPrice: 600,quantity: 10,
        },
        {
            id: 4, currentPrice: 1700, 
            previousPrice: 2200,quantity: 10,
        },
        {
            id: 5, currentPrice: 700, 
            previousPrice: 900,quantity: 10,
        }
    ]
    const cart  = new CartHandler(orders)
    let newList = cart.decrementItemQuantity(2)

    const cart2 = new CartHandler(newList)
    const newList1 = cart2.decrementItemQuantity(2)

    const cart3 = new CartHandler(newList1)
    const newList2 = cart3.decrementItemQuantity(2)

    
    expect(newList2[1].quantity).toEqual(1)
})

test('Increments item quantity', () =>{
    const orders = [
    {
        id: 1, currentPrice: 1200, 
        previousPrice: 1500,quantity: 10,
    },
    {
        id: 2, currentPrice: 1300, 
        previousPrice: 1400,quantity: 10,
    },
    {
        id: 3, currentPrice: 900, 
        previousPrice: 600,quantity: 10,
    },
    {
        id: 4, currentPrice: 1700, 
        previousPrice: 2200,quantity: 10,
    },
    {
        id: 5, currentPrice: 700, 
        previousPrice: 900,quantity: 10,
    }
]
    const cart  = new CartHandler(orders)

    const newList = cart.incrementItemQuantity(orders[0].id)
    expect(newList[0].quantity).toEqual(11)
})

test('Gets correct total quantity of items in car', () =>{
    const orders = [
    {
        id: 1, currentPrice: 1200, 
        previousPrice: 1500,quantity: 10,
    },
    {
        id: 2, currentPrice: 1300, 
        previousPrice: 1400,quantity: 10,
    },
    {
        id: 3, currentPrice: 900, 
        previousPrice: 600,quantity: 10,
    },
    {
        id: 4, currentPrice: 1700, 
        previousPrice: 2200,quantity: 10,
    },
    {
        id: 5, currentPrice: 700, 
        previousPrice: 900,quantity: 10,
    }
]
    const cart = new CartHandler(orders)

    const totalQuantity = cart.getTotalQuantity()
    
    expect(totalQuantity).toEqual(50)
})

test('Calculates order total correctly', () =>{
    const orders = [
    {
        id: 1, currentPrice: 1200, 
        previousPrice: 1500,quantity: 10,
    },
    {
        id: 2, currentPrice: 1300, 
        previousPrice: 1400,quantity: 10,
    },
    {
        id: 3, currentPrice: 900, 
        previousPrice: 600,quantity: 10,
    },
    {
        id: 4, currentPrice: 1700, 
        previousPrice: 2200,quantity: 10,
    },
    {
        id: 5, currentPrice: 700, 
        previousPrice: 900,quantity: 10,
    }
]
    const cart = new CartHandler(orders)

    const orderTotal = cart.calculateOrderToTal()
    expect(orderTotal).toEqual(58000)
})