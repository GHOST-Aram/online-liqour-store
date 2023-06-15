import black_and_white from '../images/drinks/black-and-white-whisky.png'
import { BrowserRouter as Router } from 'react-router-dom'
import { DocumentTester } from '../utils/DocumentTester'
import uniqid from 'uniqid'
import Item from '../components/Item'
 
const tester = new DocumentTester()
const item = {
    id: uniqid(),
    image: black_and_white, name:'Black and white whisky',
    currentPrice: 1200, previousPrice: 1500,quantity: 1,
}



tester.testByLabelText(
    {
        message: 'Renders aria label for previous price',
        component: <Item item={item} />,
        wrapper: Router,
        labelText: 'previous price'
    }
)

tester.testByLabelText(
    {
        message: 'Renders arial label for current price',
        component: <Item item={item} />,
        wrapper: Router,
        labelText: 'current price'
    }
)

tester.testByLabelText(
    {
        message: 'Renders aria-label for allowed discount',
        component: <Item item={item} />,
        wrapper: Router,
        labelText: 'discount'
    }
)

tester.testByRole(
    {
        message: 'Renders product image',
        component: <Item item = {item}/>,
        wrapper: Router,
        role: 'img'
    }
)

tester.testByText(
    {
        message: 'Renders product name',
        component: <Item item={item} />,
        wrapper: Router,
        text: /Black and white whisky/,
        
    }
)

tester.testByText(
    {
        message: 'Renders previous price',
        component: <Item item={item} />,
        wrapper: Router,
        text: /1500/
    }
)
tester.testByText(
    {
        message: 'Renders current price',
        component: <Item item={item} />,
        wrapper: Router,
        text: /1200/
    }
    )


tester.testByText(
    {
        message: 'Renders allowed discount',
        component: <Item item={item} />,
        wrapper: Router,
        text: /-20/
    }
)