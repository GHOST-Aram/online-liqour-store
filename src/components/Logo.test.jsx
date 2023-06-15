import { DocumentTester } from '../utils/DocumentTester'
import Logo from '../components/Logo'

const tester = new DocumentTester()

tester.testByAltText(
    {
        message: 'Renders alt text for site logo',
        component: <Logo />,
        altText: /Valhala/
    }
)