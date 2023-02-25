import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";

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
  return (
    <Box bg="blue.900" color="white" px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Image src={logo} alt="Logo" w={10} h={10} />
        <Box display={{ base: "block", md: "none" }} fontSize="3xl">
          <FaBars />
        </Box>
      </Flex>
      <Box
        display={{ base: "none", md: "block" }}
        fontSize="xl"
        fontWeight="bold"
        mt={4}
      >
        {menuItems.map((menuItem) => (
          <Box key={menuItem.label} as="span" ml={8}>
            {menuItem.label}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Menu;
