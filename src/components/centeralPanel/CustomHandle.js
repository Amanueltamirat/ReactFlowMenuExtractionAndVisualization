"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var reactflow_1 = require("reactflow");
function CustomHandle(props) {
    return (<reactflow_1.Handle style={{
            width: 8,
            height: 8,
            background: "black",
        }} {...props}/>);
}
exports.default = CustomHandle;
