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
    decrementItemQuantity = (item) => {
        this.#orders.forEach(element => {
            if(element.id === item.id && element.quantity > 1){
                element.quantity --
            }
        });
        
        return this.#orders
    }

    getTotalQuantity = () =>{
        return this.#orders.reduce((total, item) => total + Number(item.quantity), 0)
    }

    incrementItemQuantity = (item) =>{
        this.#orders.forEach(element => {
            if(element.id === item.id){
                element.quantity ++
            }
        });
        
        return this.#orders
    }
    removeItem = (item) =>{
        return this.#orders.filter(element => element.id !== item.id)
    }

}