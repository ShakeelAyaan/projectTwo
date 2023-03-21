import NewNavbar  from './NewNavbar'
import NavBarBottom from './Pojects/NavBarBottom'
import CallapiProductTwo from './CallapiProductTwo'
import {FirstSlider} from './Pojects/firstSlider'
import { BannerDown3 } from './BannerDown3'
import Login from './Pojects/Login'
import { CallapiProductFour } from './CallapiProductFour'
import SearchAppBar from './Pojects/Navbar'
import { redirect, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export const Home = ({ authorized }) => {
  const navigate = useNavigate()
  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     navigate('/Login')
  //   }
  // },[])

  return (
    <div>
      <NavBarBottom/>
     <FirstSlider/>
     <BannerDown3/>
      <CallapiProductTwo />
      <CallapiProductFour />
        </div>
  )
  }