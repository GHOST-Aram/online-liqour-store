import{ render, screen } from '@testing-library/react'

export class DisabilityTester{

    testByLabelText = (
        { message, component, labelText,expectNotdisaled, wrapper}) =>{
        test(message, () =>{
            wrapper ? render(component,{wrapper: wrapper})
            : render(component)

            expectNotdisaled ? 
            expect(screen.getByLabelText(labelText)).not.toBeDisabled() 
            : expect(screen.getByLabelText(labelText)).toBeDisabled()
        })
    }
}