import { DocumentTester } from "../utils/DocumentTester";
import Showcase from "../components/Showcase";
import { BrowserRouter as Router } from "react-router-dom";

const inDOmTester = new DocumentTester()

inDOmTester.testByText(
    {
        message: 'Renders main heading in hero section',
        component: <Showcase />,
        wrapper: Router,
        text: /We deliver your favorite whisky and wine to your door step/
    }
)


inDOmTester.testByAltText(
    {
        message: 'Renders hero image',
        component: <Showcase />,
        wrapper: Router,
        altText: /Canadian Hunters/
    }
)


inDOmTester.testByText(
    {
        message: 'Renders first warning text',
        component: <Showcase />,
        wrapper: Router,
        text: /Excessive consumption of alcohol is harmfull to your health/
    }
)

inDOmTester.testByText(
    {
        message: 'Renders second warning text',
        component: <Showcase />,
        wrapper: Router,
        text: /Drink Responsibly/
    }
)

inDOmTester.testByText(
    {
        message: 'Renders last warning text',
        component: <Showcase />,
        wrapper: Router,
        text: /Not for sale to persons under the age of 21 yrs/i
    }
)