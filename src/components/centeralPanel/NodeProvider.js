"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var reactflow_1 = require("reactflow");
var CustomHandle_tsx_1 = require("./CustomHandle.tsx");
var NODE_PROVIDER = {
    St: "",
    Gp: "",
};
function NodeProvider(_a) {
    var _b = _a.data, name = _b.name, code = _b.code, id = _a.id;
    var setNodes = (0, reactflow_1.useReactFlow)().setNodes;
    var onProviderClick = function (name, code) {
        var location = Math.random() * 200;
        setNodes(function (prevNodes) { return __spreadArray(__spreadArray([], prevNodes, true), [
            {
                id: "".concat(prevNodes.length + 1),
                data: { name: name, code: code },
                type: "nodeProvider",
                position: { x: location, y: location },
            },
        ], false); });
    };
    return (<>
    <react_1.Flex borderRadius={"24px"} border="1px solid #5e5eff" bg="white" p={1} pb={1} pl={"12px"} gap={2} width="140px" display='flex' alignItems="center">
      <react_1.Flex grow="1" _active={{ color: 'blue' }} onClick={function () { return onProviderClick(name, code); }} _hover={{ color: 'blue' }}>
        <react_1.Text textAlign='center' fontSize="12px" height='12px'>
          {name} (duplicate me)
        </react_1.Text>
      </react_1.Flex>
      <react_1.IconButton aria-label="Delete Node" pointerEvents="all" icon={<react_bootstrap_icons_1.X />} color="red" bg="transparent" size="small" border='none' onClick={function () {
            return setNodes(function (prevNodes) { return prevNodes.filter(function (node) { return node.id !== id; }); });
        }}/>
      <CustomHandle_tsx_1.default type="target" position={reactflow_1.Position.Left}/>
      <CustomHandle_tsx_1.default type="source" position={reactflow_1.Position.Right}/>
    </react_1.Flex>
    </>);
}
exports.default = NodeProvider;
