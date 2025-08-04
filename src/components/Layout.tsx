import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'

const Layout = () => {
  return (
    <>
        <Header/>
        <main className='pt-20'>
        <Hero/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout