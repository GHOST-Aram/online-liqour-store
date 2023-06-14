export class Product{
    #item

    constructor(item){
        this.#item = item    
    }

    calculateDiscount = () =>{
        if(this.#item.currentPrice < this.#item.previousPrice)
            return Math.ceil(
                (
                    (this.#item.currentPrice - this.#item.previousPrice) * 100
                ) /this.#item.previousPrice
            )
        else if(this.#item.currentPrice > this.#item.previousPrice)
            throw Error(
                `Discount is not applicable on this product:\n`
                + `Current price ${this.#item.currentPrice} is greater`
                +`than Previous Price ${this.#item.previousPrice}`

            )
        throw Error(
            `Discount is not applicable on this product:\n`
            + `Current price ${this.#item.currentPrice} is same`
            +`as Previous Price ${this.#item.previousPrice}`

        )
        
    }
}