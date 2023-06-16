import AlertDialog from "./AlertDialog";
import {DocumentTester} from '../utils/DocumentTester'

const tester = new DocumentTester()

tester.testByText(
    {
        message: 'Renders alert message',
        component: <AlertDialog message = {'Item already in cart'} />,
        text: /Item already in cart/i
    }
)

tester.testByRole(
    {
        message: 'Renders component with an alertdialog role ',
        component: <AlertDialog />,
        role: 'alertdialog'
    }
)