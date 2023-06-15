import { DocumentTester } from '../utils/DocumentTester'
import Footer from '../components/Footer'

const tester = new DocumentTester()

tester.testByRole(
    {
        message: 'Renders footer',
        component: <Footer/>,
        role: 'contentinfo'
    }
)
