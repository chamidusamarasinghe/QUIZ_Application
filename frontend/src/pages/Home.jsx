import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { Link } from 'react-router-dom'

function Home() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('authToken') || localStorage.getItem('token')));

  useEffect(() => {
    const handler = (ev) => {
      const user = ev?.detail?.user ?? null;
      setLoggedIn(!!user || Boolean(localStorage.getItem('authToken') || localStorage.getItem('token')));
    };
    window.addEventListener('authChanged', handler);
    return () => window.removeEventListener('authChanged', handler);
  }, []);

  return (
    <div>
      <Navbar />
      {loggedIn ? (
        <SideBar />
      ) : (
        <main
          className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(15,23,42,0.45), rgba(99,102,241,0.15)), url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80')`,
          }}
        >
          <div className="max-w-3xl text-center bg-white/90 p-8 rounded-2xl shadow">
            <h1 className="text-3xl font-bold mb-4">Welcome to CodeAce</h1>
            <p className="text-gray-700 mb-6">Sharpen your coding skills with concise quizzes across modern technologies.</p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/signup" className="px-4 py-2 rounded-full bg-indigo-600 text-white">Get Started</Link>
              <Link to="/login" className="px-4 py-2 rounded-full border border-indigo-600 text-indigo-600">Login</Link>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}

export default Home
