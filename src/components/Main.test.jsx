import { DocumentTester } from '../utils/DocumentTester'
import Main from '../components/Main'

const tester = new DocumentTester()

tester.testByRole(
    {
        message: 'Renders page <main> element',
        component: <Main></Main>,
        role: 'main'
    }
)