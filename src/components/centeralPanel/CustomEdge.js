"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var reactflow_1 = require("reactflow");
function CustomEdge(props) {
    var id = props.id, sourceX = props.sourceX, sourceY = props.sourceY, targetX = props.targetX, targetY = props.targetY, sourcePosition = props.sourcePosition, targetPosition = props.targetPosition;
    var setEdges = (0, reactflow_1.useReactFlow)().setEdges;
    var _a = (0, reactflow_1.getBezierPath)({
        sourceX: sourceX,
        sourceY: sourceY,
        targetX: targetX,
        targetY: targetY,
        sourcePosition: sourcePosition,
        targetPosition: targetPosition,
    }), edgePath = _a[0], labelX = _a[1], labelY = _a[2];
    return (<>
      <reactflow_1.BezierEdge {...props}/>
      <reactflow_1.EdgeLabelRenderer>
        <react_1.IconButton aria-label="Delete Edge" pos="absolute" icon={<react_bootstrap_icons_1.X />} color="red" transform={"translate(-50%, -50%) translate(".concat(labelX, "px, ").concat(labelY, "px)")} pointerEvents="all" bg="transparent" size="large" fontSize='20px' border='none' onClick={function () {
            return setEdges(function (prevEdges) { return prevEdges.filter(function (edge) { return edge.id !== id; }); });
        }}/>
      </reactflow_1.EdgeLabelRenderer>
    </>);
}
exports.default = CustomEdge;
