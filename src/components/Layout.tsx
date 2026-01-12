import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'

const Layout = () => {
  return (
    <>
        <Header/>
        <main className='pt-16'>
        <Hero/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout