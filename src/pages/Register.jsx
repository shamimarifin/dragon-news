import React, { use } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const Register = () => {
  const {createUser, setUser, updateUser} = use(AuthContext)

    const handleRegister = (e)=> {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        createUser(email, password)
        .then((result) => {
          const user = result.user;

          updateUser({
            displayName : name,
            photoURL : photo
          }).then(() => {
            setUser({...user ,  displayName : name,
            photoURL : photo})

          }).catch((error)=> {
            console.log(error.message)
            setUser(user)
          })
          

        }).catch((error)=> {
          const errorMessage = error.message;
          console.log(errorMessage)
        })
    }

  return (
     <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h2 className="text-2xl py-4 text-center font-semibold">Register your account</h2>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Your Name</label>
            <input name='name' type="text" className="input" placeholder="Enter your name" required/>

            <label className="label">Photo URL</label>
            <input name='photo' type="text" className="input" placeholder="Enter your password" required/>

            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required/>
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required/>
          
            <button type='submit' className="btn btn-neutral mt-4">Register</button>
          </form>

          <p>Already Have An Account ? <Link to="/auth/login" className="text-secondary">Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register