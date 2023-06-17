import {DocumentTester} from '../utils/DocumentTester'
import Service from "../components/Service";

const inDOmTester = new DocumentTester()

inDOmTester.testByRole(
    {
        message: 'Renders service image element',
        component: <Service/>,
        role: /img/
    }
)

inDOmTester.testByText(
    {
        message: 'Renders service name',
        component: <Service serviceName = {'Recreation'}/>,
        text: /Recreation/
    }
)

inDOmTester.testByLabelText(
    {
        message: 'Renders aria-label for service name',
        component: <Service />,
        labelText: /service name/
    }
)

inDOmTester.testByText(
    {
        message: 'Renders service city location',
        component: <Service serviceLocation = {'Nairobi'} />,
        text: /Nairobi/
    }
)

inDOmTester.testByLabelText(
    {
        message: 'Renders aria-label for service location',
        component: <Service />,
        labelText: /service location/
    }
)
inDOmTester.testByText(
    {
        message: 'Renders service opening days',
        component: <Service workingDays = {'Monday to Friday'}/>,
        text: /Monday to Friday/
    }
)

inDOmTester.testByLabelText(
    {
        message: 'Renders aria-label for open days',
        component: <Service />,
        labelText: /working days/
    }
)

inDOmTester.testByText(
    {
        message: 'Renders working hours',
        component: <Service workingDays = {'24hrs'} />,
        text: /24hrs/
    }
)

inDOmTester.testByLabelText(
    {
        message: 'Renders aria-label for working hours',
        component: <Service />,
        labelText: /working hours/
    }
)