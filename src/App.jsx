import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {Routes, Route} from "react-router-dom";
import HomeSection from './NavigationPages/Home';
import FooterSection from './components/Footer/Footer';



const App = () => {

  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomeSection/>}/>
        {/* <Route path='/Home' element={<HomeSection/>}/>
        <Route path='/Doors' element={<Doors/>} />
        <Route path='/Windows' element={<Windows/>} />
        <Route path='/Ventilators' element={<Ventilators/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} /> */}
      </Routes>
      <FooterSection/>
    </div>
  )
}

export default App
