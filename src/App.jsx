import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  let [length, setLength] = useState(8)
  let [numAallow,setNumAllow]=useState(false)
  let [charAllow,setCharAllow]=useState(false)
  let [password,setPassword]=useState("")

  let pasGen=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAallow) str+="0123456789"
    if(charAllow) str+="!@#$%^&*()_+{}[]~;"

     for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
     }

     setPassword(pass)

  },[length,numAallow,charAllow])

  useEffect(()=>{
pasGen()
  },[length,charAllow,numAallow,pasGen])


  // for copy ke liye
  
  let copypass=useCallback(()=>{

    //m-1
// window.navigator.clipboard.writeText(password)

// m-2

passRef.current?.select()

  },[password])

   //useref

   let passRef=useRef()

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 m-8 text-orange-500 bg-gray-600'>
      {/* <div className='flex shadow-md rounded-lg overflow-hidden mb-4 p-4'> */}
      <h2 className='text-white text-2xl mb-2'>password genrater</h2>
      <div className='flex justify-center'>
       <input 
       type="text"
       value={password}
       placeholder='password'
       readOnly
       className='p-4 mt-3 mb-3 rounded-md w-full' 
       ref={passRef}
       />
       <button className='ml-4 mt-4 p-2  text-lg bg-orange-500 rounded-lg h-12 text-white' onClick={copypass}>copy</button>
 
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100} 
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
          />
          <label >length : {length}</label>

        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
            defaultChecked={numAallow}
            id='numInput'
            onChange={(e)=>setNumAllow(prev=>!prev)}
          />
          <label>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
            defaultChecked={charAllow}
            id='charInput'
            onChange={(e)=>setCharAllow(prev=>!prev)}
          />
         <label>Char</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
