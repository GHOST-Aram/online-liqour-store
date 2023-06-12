import { render, screen } from "@testing-library/react";
import Section from "../components/Section";

test.skip('Renders <section> element', ()=>{
    const {asFragment} = render(<Section></Section>)

    expect(asFragment()).toMatch(<section></section>)
})