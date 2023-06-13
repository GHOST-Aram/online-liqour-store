import { screen, render } from "@testing-library/react";

export class DocumentTester{

    testByAltText = (
        {message, component,wrapper, altText}) => {

        test(message, () =>{

            if(wrapper)
                render(component, {wrapper:wrapper})
            else
                render(component)

            expect(screen.getByText(altText)).toBeInTheDocument()
        })
    }

    testByDisplayValue = (
        {message, component,wrapper, value}) => {

        test(message, () =>{

            if(wrapper)
                render(component, {wrapper:wrapper})
            else
                render(component)

            expect(screen.getByText(value)).toBeInTheDocument()
        })
    }

    testByLabelText = (
        {message, component,wrapper, labelText}) =>{

        test(message, () =>{
            if(wrapper)
                render(component, {wrapper:wrapper})
            else{
                render(component)
            }

            expect(screen.getByLabelText(labelText))
            .toBeInTheDocument()
        })
    }

    testByPlaceHolderText = (
        {message, component,wrapper, placeholder}) =>{
            
        test(message, () =>{
            
            if(wrapper)
                render(component, {wrapper:wrapper})
            else
                render(component)

            expect(screen.getByLabelText(placeholder))
            .toBeInTheDocument()
        })
    }
    testByRole = (
        {message, component,wrapper, role}) =>{

        test(message, () =>{

            if(wrapper)
                render(component, {wrapper:wrapper})
            else
                render(component)

            expect(screen.getByRole(role)).toBeInTheDocument()
        })
    }

    testByText = (
        {message, component,wrapper, text}) => {

        test(message, () =>{

            if(wrapper)
                render(component, {wrapper:wrapper})
            else
                render(component)

            expect(screen.getByText(text)).toBeInTheDocument()
        })
    }


}