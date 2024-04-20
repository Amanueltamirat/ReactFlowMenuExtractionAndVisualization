import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronBarDown } from "react-bootstrap-icons";
import { useReactFlow } from "reactflow";

const SELECT_NODE = [
  { code: "Gp", name: "New input" },
  { code: "St", name: "New output" },
];

export default function SelectNodeForCreation () {
  const { setNodes } = useReactFlow();

  const onProviderClick = ({ name, code }: { name: string; code: string }) => {
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
    <Menu>
      <MenuButton border='none'  fontSize='20px' padding='5px' borderRadius='5px' as={Button} rightIcon={<ChevronBarDown />}>
        Create Node
      </MenuButton>
      <MenuList>
        {SELECT_NODE.map((provider) => (
          <MenuItem marginTop='-5px' fontSize='14px' padding='3px' width='100px' onClick={() => onProviderClick(provider)}>
            {provider.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
