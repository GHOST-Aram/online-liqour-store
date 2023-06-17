import {DocumentTester} from '../utils/DocumentTester'
import Review from '../components/Review'

const inDomTester = new DocumentTester()

inDomTester.testByLabelText(
    {
        message: 'Renders review component with aria label',
        component: <Review />,
        labelText: /customer review/
    }
)

inDomTester.testByRole(
    {
        message: 'Renders customer image TAG',
        component: <Review />,
        role: /img/
    }
)

inDomTester.testByLabelText(
    {
        message: 'Renders aria-label for customer name',
        component: <Review />,
        labelText: /customer's name/
    }
)

inDomTester.testByText(
    {
        message: 'Renders customer review message',
        component: <Review message = {'We loved it at valhala'} />,
        text: /We loved it at Valhala/i
    }
)

inDomTester.testByLabelText(
    {
        message: 'Renders aria label for customer\'s message',
        component: <Review />,
        labelText: /message/
    }
)