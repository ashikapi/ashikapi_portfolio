import { Route, Routes } from 'react-router';
import Layout from './Layout';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Header from './Header';
import Hero from './Hero';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';

const RouteApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/header'element={<Header/>}/>
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/hero'element={<Hero/>}/>
        <Route path='/skill'element={<Skills/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Route>
    </Routes>
  );
};

export default RouteApp;
