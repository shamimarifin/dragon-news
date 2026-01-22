
import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
export const AuthContext = createContext();
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { set } from 'date-fns';

const auth =getAuth(app)

const AuthProvider = ({ children }) => {

    const [user , setUser ] = useState(null);
    const [loading , setLoading] = useState(true)
    
    // console.log(loading, user)

    const createUser = (email, password)=> {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=> {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
      return signOut(auth)
    }

    const updateUser = (updateData) => {
      return updateProfile(auth.currentUser, updateData)
    }

    useEffect(()=> {
     const unsubscriber = onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser);
        
        setLoading(false)
      });

    

      return ()=> {
        unsubscriber()
      }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        login,
        loading,
        setLoading,
        updateUser
    }


  return <AuthContext value={authData}>{children}</AuthContext>
}

export default AuthProvider

