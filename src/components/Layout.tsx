import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import CustomCursor from './CustomCursor'

const Layout = () => {
  return (
    <div className='cursor-none'>
      <CustomCursor />
        <Header/>
        <main className='pt-16 cursor-none'>
        <Hero/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout