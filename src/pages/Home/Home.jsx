import React from 'react'
import { NavbarSimple } from '../../components/navbar/Navbar'
import HeroSec from '../../components/hero/HeroSec'

const Home = () => {
  return (
  <>
   <NavbarSimple/>
   <div className='mt-18'>
   <HeroSec/>

   </div>
  </>
  )
}

export default Home