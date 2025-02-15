import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import SignUp from './Components/Login/SignUp';
import SignIn from './Components/Login/SignIn';
import Profile from './Components/Login/Profile';
import TrukList from './Components/listofTruck/TrukList';
import Dashboard from './Components/Dashboard/Dashboard';

const App = () => {
  const [flag, setFlag] = useState();
  return (
    <div className="main_container w-100">
      <Router>
        <Header flag={flag} />
        <main >
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn setFlag = {setFlag} />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/all/list/truc' element={<TrukList />} />

          </Routes>
        </main>
        <Footer />
      </Router>

    </div>
  )
}

export default App  