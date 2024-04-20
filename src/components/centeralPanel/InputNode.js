"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var reactflow_1 = require("reactflow");
var CustomHandle_tsx_1 = require("./CustomHandle.tsx");
function InputNode(_a) {
    var amount = _a.data.amount;
    return (<react_1.Box bg="white" border="1px solid #5e5eff " borderRadius='50px' width='110px'>
      <react_1.Box p={1}>
        <react_1.Text _hover={{ color: 'blue' }} height='12px' fontSize="14px" color="blue.600" textAlign='center' padding="0 2px">
        Initial Node
        </react_1.Text>
      </react_1.Box>
      <CustomHandle_tsx_1.default type="source" position={reactflow_1.Position.Right}/>
    </react_1.Box>);
}
exports.default = InputNode;
