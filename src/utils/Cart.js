export class Cart{
    #orders
    constructor(orders){
        this.#orders = orders
    }

    addNewItem = (item) =>{
        return [...this.#orders, item]
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
            if(element.id === item.id && element.quantity > 0){
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