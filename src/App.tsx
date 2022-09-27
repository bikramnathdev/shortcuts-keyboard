import './App.css'

function App() {
  return (
    <div className="h-screen bg-black">
     <div className='h-1/2'>
      <div className='border-8 border-gray-800 mx-auto w-3/4 h-full bg-black/90 rounded-md text-white'>
        package
      </div>
     </div>
     <div className='h-1/2 p-2 bg-[#c0c0c0] flex items-center'>
     <div className='mx-auto w-3/4 border-4 border-black rounded-lg h-3/4 p-4'>
      <div className="w-4 h-4 p-4 flex items-center justify-center  text-white text-xs font-extralight rounded-lg cursor-pointer key-button">
        4
      </div>
      </div>
     </div>
    </div>
  )
}

export default App
