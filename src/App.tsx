import './App.css'
import React , {useEffect, useRef} from 'react';
function App() {
  const buttonRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      setTimeout(() => {
        button.classList.replace('key-button', 'key-button-clicked');
      }, 2500)
      setTimeout( () => {
        button.classList.replace('key-button-clicked', 'key-button');
      }, 2800)
    }
  
  }, [])
  
  return (
    <div className="h-screen bg-black">
     <div className='h-1/2'>
      <div className='border-8 border-gray-800 mx-auto w-3/4 h-full bg-black/90 rounded-md text-white'>
        package
      </div>
     </div>
     <div className='h-1/2 p-2 bg-[#c0c0c0] flex items-center'>
     <div className='mx-auto w-3/4  rounded-lg h-3/4 p-4 bg-gray-600'>
      <div className='w-full h-full bg-[#c0c0c0] flex p-2 gap-4'>
      <span className="w-4 h-4 p-4 flex items-center justify-center text-xs rounded-lg cursor-pointer font-medium key-button" ref={buttonRef}>
        esc 
      </span>
      <span className="w-4 h-4 p-4 flex items-center justify-center text-xs font-extralight rounded-lg cursor-pointer key-button">
        4
      </span>
      </div>
      </div>
     </div>
    </div>
  )
}

export default App
