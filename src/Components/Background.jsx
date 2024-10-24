import React from 'react'

function Background() {
  return (
    <div className='relative '>
      <div className='fixed inset-0 bg-zinc-800 z-3 '>
        <p className='absolute bottom-4 right-4 text-white text-opacity-55'>Satynarayan Maurya</p>
        <h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] text-zinc-900 -translate-y-[50%] text-[15vw] font-semibold leading-none tracking-tighter'>Docs.</h1>
      </div>
    </div>
  )
}

export default Background
