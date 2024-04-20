import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import CustomHandle from "./CustomHandle.tsx";

export default function InputNode({
  data: { amount },
}: NodeProps<{ amount: number }>) {
  return (

    <Box bg="white" border="1px solid #5e5eff " borderRadius='50px' width='110px'>
      <Box p={1}>
        <Text _hover={{color:'blue'}} height='12px' fontSize="14px" color="blue.600" textAlign='center' padding="0 2px">
        Initial Node
        </Text>
      </Box>
      <CustomHandle type="source" position={Position.Right} />
    </Box>
  );
}
