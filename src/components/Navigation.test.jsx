import { DocumentTester } from "../utils/DocumentTester";
import {Navigation} from "../components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

const tester = new DocumentTester()

tester.testByRole(
    {
        message: 'Renders navigation bar',
        component: <Navigation />,
        wrapper: Router,
        role: 'navigation'
    }
)

tester.testByText(
    {
        message: 'Renders Home NavLink',
        component: <Navigation />,
        wrapper: Router,
        text: /Home/
    }
)

tester.testByText(
    {
        message: 'Renders shop NavLink',
        component: <Navigation />,
        wrapper: Router,
        text: /Shop/
    }
)

tester.testByText(
    {
        message: 'Renders cart Navlink',
        component: <Navigation />,
        wrapper: Router,
        text: /cart/i
    }
)