import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MyResult from './components/MyResult';

//private protected route 
function RequirweAuth({children}){
  const isLoggedIn = Boolean(localStorage.getItem("authToken"));
  const location = useLocation();

  if(!isLoggedIn){
    return <Navigate to="/login" state={{from: location}} replace />;
  }

  return children;
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<SignUp />} />

      <Route path='/results' element={<MyResult />} />
      
    </Routes>
  )
}

export default App
