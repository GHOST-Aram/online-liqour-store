import React from 'react'

const Footer = () => {
  return (
    <footer className='py-4'>
		<div className="border-t-2 border-zinc-900">
          <div className="mt-4 bg-zinc-900 py-4">
				<p className="text-center text-slate-300">
					Copyright &copy; Valahala {new Date().getFullYear()}
				</p>
		  </div>
		</div>
    </footer>
  )
}

export default Footer