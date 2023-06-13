import React from 'react'

const Main = ({children}) => {
  return (
    <main aria-atomic='true' aria-live='polite'>{children}</main>
  )
}

export default Main