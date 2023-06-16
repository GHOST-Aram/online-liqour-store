import Brand from '../components/Brand'
import { DocumentTester } from '../utils/DocumentTester'

const tester = new DocumentTester()

tester.testByAltText(
    {
        message: 'Renders brand alt text',
        component: <Brand brandName = {'Jonnie Walker'} />,
        altText: /Jonnie Walker/
    }
)

tester.testByLabelText(
    {
        message: 'Renders aria-lable of brand',
        component: <Brand />,
        labelText: /featured brand/
    }
)

tester.testByRole(
    {
        message: 'Renders image element',
        component: <Brand />,
        role: /img/
    }
)