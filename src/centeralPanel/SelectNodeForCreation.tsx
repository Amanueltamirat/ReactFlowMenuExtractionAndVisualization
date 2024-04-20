import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronBarDown } from "react-bootstrap-icons";
import { useReactFlow } from "reactflow";

const SELECT_NODE = [
  { code: "Gp", name: "Input" },
  { code: "St", name: "Output" },
];

export default function SelectNodeForCreation() {
  const { setNodes } = useReactFlow();

  const onProviderClick = ({ name, code }: { name: string; code: string }) => {
    const location = Math.random() * 500;

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
      <MenuButton as={Button} rightIcon={<ChevronBarDown />}>
        Create Node
      </MenuButton>
      <MenuList>
        {SELECT_NODE.map((provider) => (
          <MenuItem onClick={() => onProviderClick(provider)}>
            {provider.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
