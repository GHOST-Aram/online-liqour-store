import Heading from "../components/Heading";
import { DocumentTester } from "../utils/DocumentTester";

const tester = new DocumentTester()

tester.testByRole(
    {
        message: 'Renders heading element',
        component: <Heading level={1}></Heading>,
        role: 'heading',
    }
)

tester.testByText(
    {
        message: 'Renders Heading textContent',
        component: <Heading level = {1}>Welcome Home</Heading>,
        text: /Welcome Home/
    }
)
