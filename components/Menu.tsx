import { Box } from "@chakra-ui/react";
import React from "react";

interface MenuItem {
  label: string;
  link: string;
  subMenu?: MenuItem[];
}

interface MenuProps {
  logo: string;
  menuItems: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ logo, menuItems }) => {
  return <Box></Box>;
};

export default Menu;
