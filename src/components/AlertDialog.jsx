import React, { useEffect } from 'react'
import Button from './Button'

const AlertDialog = ({message, closeDialog}) => {

    useEffect(() =>{
        const closeButton = document.querySelector('#close-alert')
        closeButton.focus()

        return ()=>closeButton.blur()
    },[])

    return (
        <div role = 'alertdialog' aria-live='assertive'
            id='alert-dialog'
           className={
            'p-4 rounded-md bg-white absolute'+
            ' inset-x-1/4 lg:inset-x-1/3 top-1/4 text-center'
            }
        >
            <div className="text-red-700 font-bold py-4">
                {message}
            </div>
            <Button id={'close-alert'} handleClick={closeDialog}>Close</Button>
        </div>
    )
}

export default AlertDialog