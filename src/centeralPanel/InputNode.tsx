import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import CustomHandle from "./CustomHandle.tsx";

export default function InputNode({
  data: { amount },
}: NodeProps<{ amount: number }>) {
    
    // #aa1fff
  return (

    <Box bg="white" border="1px solid #5e5eff " borderRadius='50px' width='110px'>
      <Box p={2}>
        <Text fontSize="2xl" color="blue.600" textAlign='center' padding="0 5px">
        Initial Node
        </Text>
      </Box>
      <CustomHandle type="source" position={Position.Right} />
    </Box>
  );
}
