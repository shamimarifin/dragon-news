import React, { use, useState } from "react";
import { Link, Links, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";



const Login = () => {
   const [error , setError] = useState()
   const { login } = use(AuthContext)
   const location = useLocation()
   const navigate = useNavigate()
   console.log(location)

  const handleLogin = (e)=> {
    e.preventDefault()

    const form = e.target
    const email = form.email.value;
    const password = form.password.value;

    login(email , password)
     .then((result)=> {
      const user = result.user
      console.log(user)
 
      navigate(`${location.state ? location.state : "/"}`)
    }).catch((error)=> {
      console.log(error.message)
      setError(error.message)
    })

  }

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h2 className="text-2xl py-4 text-center font-semibold">Login your account</h2>
          <form className="fieldset" onSubmit={handleLogin}>
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" name="email"/>
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" name="password"/>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4" type="submit">Login</button>
          </form>

          <p>Dont’t Have An Account ? <Link to="/auth/register" className="text-secondary">Register</Link></p>

          {
            error && <p>Already email exist</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
