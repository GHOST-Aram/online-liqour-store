import CartSummary from "../components/CartSummary";
import { DocumentTester } from "../utils/DocumentTester";

const tester = new DocumentTester()

tester.testByText(
    {
        message: 'Renders number of items in the cart',
        component: <CartSummary totalQuantity={19}/>,
        text: /19/
    }
)

tester.testByText(
    {
        message: 'Renders order total',
        component: <CartSummary orderTotal={2300} />,
        text: /2300/
    }
)
