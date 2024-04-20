import React from 'react'
import MenuExtraction from './components/MenuExtraction.tsx';
import ReactflowRender from './centeralPanel/ReactflowRender.tsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='app'>
        <h1>ReactFlow Menu Extraction and Visualization</h1>
        <div className='container'>
            <MenuExtraction/>
           <ReactflowRender/>
          {/* <ChakraProvider>
          </ChakraProvider> */}
             <ToastContainer />
        </div>
    </div>
  )
}

export default App