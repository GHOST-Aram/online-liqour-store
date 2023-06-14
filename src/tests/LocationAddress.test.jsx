import LocationAddress from '../components/LocationAddress'
import { DocumentTester } from '../utils/DocumentTester'

const tester = new DocumentTester()

tester.testByLabelText(
    {
        message: 'Renders aria-label for location information',
        component: <LocationAddress />,
        labelText: 'location information'
    }
)

tester.testByText(
    {
        message: 'Renders address name',
        component: <LocationAddress addressName={'Nairobi'}/>,
        text: /Nairobi/
    }
)

tester.testByLabelText(
    {
        message: 'Renders aria-label for location name',
        component: <LocationAddress />,
        labelText: /location name/
    }
)
tester.testByLabelText(
    {
        message: 'Renders aria-label for strret address',
        component: <LocationAddress />,
        labelText: /street address/ 
    }
)
tester.testByText(
    {
        message: 'Renders street address',
        component: <LocationAddress streetAddress={'Oginga Odinga Street'} />,
        text: /Oginga Odinga Street/
    }
)

tester.testByLabelText(
    {
        message: 'Renders aria-label for phone number',
        component: <LocationAddress />,
        labelText: /phone number/
    }
)

tester.testByText(
    {
        message: 'Renders phone number',
        component: <LocationAddress phone={'0796699806'} />,
        text: /0796699806/
    }
)

tester.testByLabelText(
    {
        message: 'Renders email aria-label',
        component: <LocationAddress />,
        labelText: /email/
    }
)
tester.testByText(
    {
        message: 'Renders email',
        component: <LocationAddress email={'xyz@gmail.com'} />,
        text: /xyz@gmail.com/
    }
)