import { useState,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length ,setlength] = useState(6);
  const [numberallowed ,setNumberAllowed]= useState(false);
  const [charallowed ,setcharallowed]= useState(false);
  const[password,setPassword]=useState("");
  // useRef hook
  const passwordRef= useRef(null);

  const passwordGenrator = useCallback(()=>{
    let pass =""
    let str ="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if(numberallowed){
      str+="1234567890"
    }
    if(charallowed){
      str+="~!@#$%^&_"
    }
    for (let i = 1; i <= length; i++) {
      let char =Math.floor(Math.random()*str.length +1)
      pass+= str.charAt(char)
    }
    setPassword(pass)


  },[length,numberallowed,charallowed,setPassword])
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenrator();
  },[length,numberallowed,charallowed,passwordGenrator])


  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-700 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password genrator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        ref={passwordRef}
        readOnly
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6} 
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
           />
           <label htmlFor="">
            Length:{length}
           </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberallowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }}
          
          />
          <label htmlFor='numberInput'>Number</label>

        </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                  setcharallowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
        
      </div>
    </>
  )
}

export default App
