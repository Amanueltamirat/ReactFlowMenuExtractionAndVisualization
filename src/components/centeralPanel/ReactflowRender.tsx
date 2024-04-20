
import React, { useCallback, useState, Dispatch, SetStateAction } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Node,
  Connection,
  OnNodesChange,
  OnEdgesChange,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomEdge from "./CustomEdge.tsx";
import InputNode from "./InputNode.tsx";
import SelectNodeForCreation from "./SelectNodeForCreation.tsx";
import NodeProvider from "./NodeProvider.tsx";
import {motion} from 'framer-motion'

const initialEdges: Edge[] = [];
const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { amount: 20 },
    type: "inputNode",
  },

   {
    id: "2",
    data: { name: "Input", code: "Gp" },
    position: { x: 300, y: -50 },
    type: "nodeProvider",
  },
  {
    id: "3",
    data: { name: "Output", code: "St" },
    position: { x: 300, y: 125 },
    type: "nodeProvider",
  },  
{

    id: "4",
    data: {},
    position: { x: 275, y: -100 },
    type: "selectNodeForCreation",
  },
];

const nodeTypes = {
  inputNode:InputNode,
  selectNodeForCreation:SelectNodeForCreation,
  nodeProvider:NodeProvider
}

const edgeTypes = {
  customEdge: CustomEdge,
};


const sliderVariants = {
    initial:{
        x:0,
        
    },
     animate:{
        x:'-120%',
        transition:{
        repeat:Infinity,
        repeatType:'mirror',
        duration:10,
       
        },

    }
}


const ReactflowRender = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
const onConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        animated: true,
        id: `${edges.length} + 1`,
        type: "customEdge",
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [edges, setEdges]
  );
  return (
    <div className="react-flow" style={{height:'450px', width:'750px'}}>
      <ReactFlow nodesDraggable={true} nodes={nodes} edges={edges}
      fitView
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      >
        <Background/>
        <Controls/>
      </ReactFlow>
       <motion.div drag={false}  className='sliding-text-container' variants={sliderVariants} initial='initial' animate='animate'>
           This is EPhone
        </motion.div>
    </div>
  )
};

export default ReactflowRender;