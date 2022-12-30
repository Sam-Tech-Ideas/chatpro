import React, { useState } from 'react'


const style = {
    form:`h-14 w-full max-w-[720px] flex absolute text-xl bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900  text-white outline-none border-none`,
    button: `w-[20%] bg-green-500 `
};


const SendMsg = () => {
  const [input, setInput] = useState('')


  return (
    
      
         <form className={style.form}>
            <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Message' className={style.input} />
            <button className={style.button} type='submit'>Send</button>
        </form> 

  
  )
}

export default SendMsg