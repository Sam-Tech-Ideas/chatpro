import React from 'react'

import { auth } from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Navbar from './components/Navbar'
import Chat from './components/Chat'

const style = {
  AppContainer: `max-w-[720px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`

}


const App = () => {
const [user] = useAuthState(auth);

  return (
    <div className={style.AppContainer}>
      <section className={style.sectionContainer}>
      {/**Navbar */}
      <Navbar/>
      {
        user ? <Chat/> : null
      }
      </section>
    </div>
  )
}

export default App