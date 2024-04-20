import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { X } from "react-bootstrap-icons";
import { Handle, NodeProps, Position, useReactFlow } from "reactflow";
import CustomHandle from "./CustomHandle.tsx";

const NODE_PROVIDER: { [code: string]: string } = {
  St: "",
  Gp: "",
};

export default function NodeProvider({
  data: { name, code },
  id,
}: NodeProps<{ name: string; code: string }>) {
  const { setNodes } = useReactFlow();

 const onProviderClick = (name, code) => {
    const location = Math.random() * 200;

    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        type: "nodeProvider",
        position: { x: location, y: location },
      },
    ]);
  };

  return (
    <>
    <Flex
      borderRadius={"24px"}
      border="1px solid #5e5eff"
      bg="white"
      p={1}
      pb={1}
      pl={"12px"}
      gap={2}
      width="140px"
      display='flex'
      alignItems="center"
    
    >
      <Flex grow="1" _active={{color:'blue'}} onClick={() => onProviderClick(name, code)} _hover={{color:'blue'}}>
        <Text textAlign='center' fontSize="12px" height='12px' >
          {name} (duplicate me)
        </Text>
      </Flex>
      <IconButton
        aria-label="Delete Node"
        pointerEvents="all"
        icon={<X />}
        color="red"
        bg="transparent"
        size="small"
        border='none'
        onClick={() =>
          setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))
        }
      />
      <CustomHandle type="target" position={Position.Left} />
      <CustomHandle type="source" position={Position.Right} />
    </Flex>
    </>
  );
}
