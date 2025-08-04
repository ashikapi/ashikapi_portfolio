import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Skills from '../pages/Skills'
import Contact from '../pages/Contact'

const Hero = () => {
  return (
    <div>
                <section id='home' className='scroll-mt-20'><Home/></section>
                <section id='aboutme' className='scroll-mt-3'><AboutMe/></section>
                <section id='skill' className='scroll-mt-10'><Skills/></section>
                <section></section>
                <section></section>
                <section></section>
                <section id='contact' className='scroll-mt-10'><Contact/></section>
                <section></section>
    </div>
  )
}

export default Hero