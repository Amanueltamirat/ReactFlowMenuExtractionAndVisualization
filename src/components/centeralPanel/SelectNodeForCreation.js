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
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var reactflow_1 = require("reactflow");
var SELECT_NODE = [
    { code: "Gp", name: "New input" },
    { code: "St", name: "New output" },
];
function SelectNodeForCreation() {
    var setNodes = (0, reactflow_1.useReactFlow)().setNodes;
    var onProviderClick = function (_a) {
        var name = _a.name, code = _a.code;
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
    return (<react_1.Menu>
      <react_1.MenuButton border='none' fontSize='20px' padding='5px' borderRadius='5px' as={react_1.Button} rightIcon={<react_bootstrap_icons_1.ChevronBarDown />}>
        Create Node
      </react_1.MenuButton>
      <react_1.MenuList>
        {SELECT_NODE.map(function (provider) { return (<react_1.MenuItem marginTop='-5px' fontSize='14px' padding='3px' width='100px' onClick={function () { return onProviderClick(provider); }}>
            {provider.name}
          </react_1.MenuItem>); })}
      </react_1.MenuList>
    </react_1.Menu>);
}
exports.default = SelectNodeForCreation;
