"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var MenuExtraction_tsx_1 = require("./components/menuextraction/MenuExtraction.tsx");
var ReactflowRender_tsx_1 = require("./components/centeralPanel/ReactflowRender.tsx");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var framer_motion_1 = require("framer-motion");
var textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};
function App() {
    return (<framer_motion_1.motion.div className='app'>
        <framer_motion_1.motion.h1 variants={textVariants} initial='initial' animate='animate'>ReactFlow Menu Extraction and <span>V</span>isualization</framer_motion_1.motion.h1>
        <div className='container'>
            <MenuExtraction_tsx_1.default />
           <ReactflowRender_tsx_1.default />
             <react_toastify_1.ToastContainer position='bottom-center'/>
             
        </div>
    </framer_motion_1.motion.div>);
}
exports.default = App;
