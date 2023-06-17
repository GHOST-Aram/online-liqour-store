import {DocumentTester} from '../utils/DocumentTester'
import QuantityButtons from "../components/QuantityButtons";
import { DisabilityTester } from '../utils/DisabilityTester';

const tester = new DocumentTester()
const disabilityTester = new DisabilityTester()

tester.testByText(
    {
        message: 'Renders item Quntity',
        component: <QuantityButtons item = {{ id: 1, quantity: 1}} />,
        text: /1/

    }
)

disabilityTester.testByLabelText(
    {
        message: 'Disables decrement button if quanitity is not greater than 1',
        component: <QuantityButtons item={{ id: 1, quantity: 1}} />,
        labelText: /decrement quantity/,
    }
)