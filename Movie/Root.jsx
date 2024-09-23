
import { Outlet } from 'react-router-dom'
import Header from './shared/Header'
import Footer from './shared/Footer'


export default function Root() {
  return (
    <div className='h-full bg-slate-600'>
        <Header />
        <main className='px-10'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
