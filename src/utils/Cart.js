export class CartHandler{
    #orders
    constructor(orders){
        this.#orders = orders
    }

    addNewItem = (item) =>{
        if(!this.#orders.find(
            element => element.id ===item.id 
            && element.quantity === item.quantity
            )){
            return [...this.#orders, item]
        }
        throw Error('Item already exists in the orders list')
    }
    
    calculateOrderToTal = () => {
        return this.#orders.reduce((orderTotal, item) =>{
            return (
                orderTotal + 
                Number(item.quantity) * Number(item.currentPrice)
                )
        }, 0)
    }
    decrementItemQuantity = (itemId) => {
        
        return this.#orders.map(item => 
            item.id === itemId ? 
            {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1}
             : item)
    }

    getTotalQuantity = () =>{
        return this.#orders.reduce((total, item) => total + Number(item.quantity), 0)
    }

    incrementItemQuantity = (itemId) =>{
        return this.#orders.map(item => 
            item.id === itemId ? {...item, quantity: item.quantity + 1} : item)
    }
    removeItem = (itemId) =>{
        return this.#orders.filter(element => element.id !== itemId)
    }

}