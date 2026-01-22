import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import userLogo from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider'
import { toast, ToastContainer } from 'react-toastify'

const Navbar = () => {
  const {user, logOut} = use(AuthContext)

  const handleLogout = ()=> {
   
    logOut().then(()=> {
      toast('You have successfully login account')
    }).catch(()=> {
      toast('You have successfully logout account')
    })
      
  }

  return (
    
    <div className='flex justify-between items-center'>
        <div className=''>
              <ToastContainer />
        </div>
        <div className='nav flex gap-5 text-accent'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
        </div>

        <div className='login-btn flex gap-5'>
            <img className='size-10 cursor-pointer' src={user ? user.photoURL : userLogo} alt="" />

            {
              user ? (
                <button onClick={handleLogout} className='btn btn-secondary'>LogOut</button>
              ) : (
                <Link to="/auth/login" className='btn btn-primary'>LogIn</Link>
              )
            }

           
        </div>
    
    </div>
    
  )
}

export default Navbar