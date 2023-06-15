import { DocumentTester } from "../utils/DocumentTester";
import CartItem from "../components/CartItem";
import red_label from '../images/drinks/jonnie_wlaker_red_label.png'

const domTester = new DocumentTester()
const item = { 
    name: 'Red Label', currentPrice: 2000, 
    quantity: 1, image: red_label,
}

domTester.testByAltText(
    {
        message: 'Renders cart Item Alt text', 
        component: <CartItem item={item} />,
        altText: /Red Label/
    }
)

domTester.testByLabelText(
    {
        message: 'Renders aria-label for cart item',
        component: <CartItem item={item} />,
        labelText: /cart item/
    }
)

domTester.testByLabelText(
    {
        message: 'Renders aria-label for item price', 
        component: <CartItem item={item} />,
        labelText: /price/
    }
)

domTester.testByLabelText(
    {
        message: 'Renders aria-label for item name',
        component: <CartItem item={item} />,
        labelText: /name/
    }
)

domTester.testByLabelText(
    {
        message:'Renders arial-label for increment button',
        component: <CartItem item={item}/>,
        labelText: /increment quantity/
    }
)

domTester.testByLabelText(
    {
        message: 'Renders aria-label for decrement button',
        component: <CartItem item={item} />,
        labelText: /decrement quantity/
    }
)

domTester.testByLabelText(
    {
        message: 'Renders aria-label for item quantity',
        component: <CartItem item={item} />,
        labelText: 'quantity'
    }
)
domTester.testByRole(
    {
        message: 'Renders cart item image',
        component: <CartItem item={item} />,
        role: /img/
    }
)

domTester.testByText(
    {
        message: 'Renders item name',
        component: <CartItem item={item} />,
        text: /Red Label/
    }
)

domTester.testByText(
    {
        message: 'Renders cart item current price',
        component: <CartItem item={item} />,
        text: /2000/
    }
)

domTester.testByText(
    {
        message: 'Renders item quantity',
        component: <CartItem item={item} />,
        text: /1/
    }
)