"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var reactflow_1 = require("reactflow");
require("reactflow/dist/style.css");
var CustomEdge_tsx_1 = require("./CustomEdge.tsx");
var InputNode_tsx_1 = require("./InputNode.tsx");
var SelectNodeForCreation_tsx_1 = require("./SelectNodeForCreation.tsx");
var NodeProvider_tsx_1 = require("./NodeProvider.tsx");
var framer_motion_1 = require("framer-motion");
var initialEdges = [];
var initialNodes = [
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
var nodeTypes = {
    inputNode: InputNode_tsx_1.default,
    selectNodeForCreation: SelectNodeForCreation_tsx_1.default,
    nodeProvider: NodeProvider_tsx_1.default
};
var edgeTypes = {
    customEdge: CustomEdge_tsx_1.default,
};
var sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: '120%',
        transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 10,
        },
    }
};
var ReactflowRender = function () {
    var _a = (0, reactflow_1.useNodesState)(initialNodes), nodes = _a[0], setNodes = _a[1], onNodesChange = _a[2];
    var _b = (0, reactflow_1.useEdgesState)(initialEdges), edges = _b[0], setEdges = _b[1], onEdgesChange = _b[2];
    var onConnect = (0, react_1.useCallback)(function (connection) {
        var edge = __assign(__assign({}, connection), { animated: true, id: "".concat(edges.length, " + 1"), type: "customEdge" });
        setEdges(function (prevEdges) { return (0, reactflow_1.addEdge)(edge, prevEdges); });
    }, [edges, setEdges]);
    return (<div className="react-flow" style={{ height: '450px', width: '750px' }}>
      <reactflow_1.default nodesDraggable={true} nodes={nodes} edges={edges} fitView onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeTypes={nodeTypes} edgeTypes={edgeTypes}>
        <reactflow_1.Background />
        <reactflow_1.Controls />
      </reactflow_1.default>
       <framer_motion_1.motion.div drag={false} className='sliding-text-container' variants={sliderVariants} initial='initial' animate='animate'>
           This is EPhone
        </framer_motion_1.motion.div>
    </div>);
};
exports.default = ReactflowRender;
