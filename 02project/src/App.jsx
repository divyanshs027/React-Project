import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberZAllowed] = useState(false)
  const [charrAllowed, setCharZAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passwrodGenrator = useCallback(() => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxz"

    if(numberAllowed){
      str += "0123456789"
    }
    if(charrAllowed){
      str +="!@#$%^&*(){}[]?"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numberAllowed,charrAllowed, setPassword])

  const PasswordRef = useRef(null)

  const copyPasswordOnClickBoard = useCallback(() => {
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwrodGenrator()
  }, [length, numberAllowed, charrAllowed, passwrodGenrator])

  return (
    <>
    <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'> 
        <h1 className='text-white text-center my-3'>Password Genrator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={PasswordRef}
          />
          <button 
          onClick={copyPasswordOnClickBoard}
          className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800'>
            Copy
          </button>
      </div>
      <div className='flex text-sm gap-x-2 justify-around'>
          <div className='flex items-center gap-x-1 mb-3'>
              <input type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked = {numberAllowed}
            id = "numburInput"
            onChange={() => {
              setNumberZAllowed((prev)=> !prev)
            }}
            />
            <label htmlFor="numberInput">Add Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked = {charrAllowed}
            id = "CharacterInput"
            onChange={() => {
              setCharZAllowed((prev)=> !prev)
            }}
            />
            <label htmlFor="numberInput">Add Character</label>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
