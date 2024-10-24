import React from 'react'
import { AiTwotoneFilePdf } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion"

function Cards({reference}) {

    const preventSelection = (e) => {
        e.preventDefault();
      };
  return (
    <motion.div  drag whileDrag={{ scale: 1.45 }} dragElastic={0}  dragConstraints={reference} dragTransition={{ bounceStiffness: 2000, bounceDamping:8}}  className='w-36 h-[150px] '>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/013/362/736/small/football-soccer-transparent-free-png.png" alt="Draggable Image" 
        className="lg:w-[150px] w-[120px] h-auto"   onMouseDown={preventSelection} />
           

    </motion.div>
  )
}

export default Cards


