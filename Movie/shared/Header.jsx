import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-700 h-[72px] px-10 flex items-center justify-between'>
      <Link to='/'>
        <h1 className='text-xl font-semibold text-white'>Movie App</h1>
      </Link>
      <div className='w-10 h-10'>
        <img src="/user.png" alt="user" />
      </div>
    </header>
  )
}
