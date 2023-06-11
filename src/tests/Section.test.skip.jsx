import { render, screen } from "@testing-library/react";
import Section from "../components/Section";

test('Renders <section> element', ()=>{
    const {asFragment} = render(<Section></Section>)

    expect(asFragment(<section></section>)).toBeInTheDocument()
})