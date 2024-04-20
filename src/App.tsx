import React from 'react'
import MenuExtraction from './components/menuextraction/MenuExtraction.tsx';
import ReactflowRender from './components/centeralPanel/ReactflowRender.tsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from 'framer-motion'

const textVariants = {
    initial:{
        x:-500,
        opacity:0
    },
     animate:{
        x:0,
        opacity:1,
        transition:{
        duration:1,
        staggerChildren:0.1
        },

    },
    scrollButton:{
     opacity:0,
     y:10,
    transition:{
       duration:2,
       repeat:Infinity
     }
}

};

// "start": "ts-node-dev index.ts",
// "start": "node index.tsx",

function App() {
  return (
    <motion.div  className='app'>
        <motion.h1 variants={textVariants} initial='initial' animate='animate'>ReactFlow Menu Extraction and <span>V</span>isualization</motion.h1>
        <div className='container'>
            <MenuExtraction/>
           <ReactflowRender/>
             <ToastContainer position='bottom-center' />
             
        </div>
    </motion.div>
  )
}

export default App