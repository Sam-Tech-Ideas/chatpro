import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase';
import Logout from './Logout';
import SignIn from './SignIn';


const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-3xl text-white font-bold`
}

const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user)

  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Chat App</h1>
        {
            user ? <Logout/> : <SignIn/>
        }
       
    </div>
  )
}

export default Navbar