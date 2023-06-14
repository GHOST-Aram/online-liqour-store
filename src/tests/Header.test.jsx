import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import { DocumentTester } from "../utils/DocumentTester";

const tester = new DocumentTester()

tester.testByRole(
    {
        message: 'Renders header',
        component: <Header />,
        wrapper: BrowserRouter,
        role: 'banner'
    }
)



