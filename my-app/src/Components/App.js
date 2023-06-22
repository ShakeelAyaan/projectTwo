import {  Route,Routes, useNavigate} from 'react-router-dom'
import { Home } from './FakePracticePro/Home';
import  NewNavbar  from './FakePracticePro/NewNavbar';
import Footer from './FakePracticePro/Footer'
import AddToCard from './FakePracticePro/AddToCard';
import { Display } from './FakePracticePro/Display';
// import { Divider } from '@mui/material';
import './FakePracticePro/CSS/App.css'
import Login from './FakePracticePro/Pojects/Login';
import SingIN from './FakePracticePro/Pojects/SingIN';
import DisplayFetch from './FakePracticePro/Pojects/DisplayFetch';
import Buynow from './Buynow';
import { AddToCardApi } from './AddToCardApi';
import AddToCardDisplya from './FakePracticePro/AddToCardDisplya';

const App = () => {

  function Science(){
  const Navigate = useNavigate()
    return <div>{Navigate('/') }</div>
  }   

  return (
          <div className='app'>
              <NewNavbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Display/:id' element={<Display />} />
                <Route path='/Displayfetch/:id' element={<DisplayFetch />} />
                <Route path='/Addtocard' element={<AddToCard />} />
                <Route path='/Addtocardapi' element={<AddToCardApi/>} />
                <Route path ='/Login' element={<Login />}/>
                <Route path='Login/SingIN' element={<SingIN />} />
                <Route path='Buynow' element={<Buynow />} />
                <Route path='AddToCardDisplya' element={<AddToCardDisplya />} />
                <Route path='*' element={<Science />}/>
            </Routes>
              <Footer/>
          </div>
          

  )
}

export default App;
// <Divider sx={{ marginTop: "9px", padding: "9px" }} />
