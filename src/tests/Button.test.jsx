import { DocumentTester } from '../utils/DocumentTester'
import Button from '../components/Button'

const tester = new DocumentTester()

tester.testByRole(
    {
        message:'Renders button', 
        component: <Button></Button>,
        role: 'button'
    }
)

tester.testByText(
    {
        message: 'Renders button textContext', 
        component: <Button>Order Now</Button>,
        text: /Order now/i
    }
)
