import React, { useRef } from 'react'
import Cards from './Cards'

function Foreground() {

    const ref = useRef(null);
  return (
   
        <div ref={ref}  className='fixed flex gap-5 flex-wrap w-full h-full  inset-0 p-8 z-30'>
            <Cards reference={ref}/>
            <Cards reference={ref}/>
    </div>
  )
}

export default Foreground
