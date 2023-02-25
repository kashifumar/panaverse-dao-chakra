import { Box, Flex, Image, Switch } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box bg="blue.900" color="white" px={4} py={2}>
      <Flex justify="space-between" align="center">
        <Image src={logo} alt="Logo" w={10} h={10} />
        <Flex align="center">
          <Switch isChecked={isDarkMode} onChange={handleDarkMode} mr={2} />
          <Box display={{ base: "block", md: "none" }} fontSize="3xl">
            <FaBars />
          </Box>
        </Flex>
      </Flex>
      <Box
        display={{ base: "none", md: "block" }}
        fontSize="xl"
        fontWeight="bold"
        mt={4}
      >
        {menuItems.map((menuItem) => (
          <Box
            key={menuItem.label}
            as="span"
            ml={8}
            cursor="pointer"
            onClick={() => menuItem.subMenu && handleSubMenu()}
            position="relative"
          >
            {menuItem.label}
            {menuItem.subMenu && (
              <Box
                position="absolute"
                top="100%"
                left="0"
                bg="blue.900"
                py={2}
                px={4}
                zIndex={10}
                opacity={showSubMenu ? 1 : 0}
                transition="opacity 0.2s"
                pointerEvents={showSubMenu ? "auto" : "none"}
              >
                {menuItem.subMenu.map((subMenuItem) => (
                  <Box key={subMenuItem.label} mb={2}>
                    <a href={subMenuItem.link}>{subMenuItem.label}</a>
                  </Box>
                ))}
              </Box>
            )}
            {menuItem.subMenu && (
              <Box as="span" ml={2}>
                {showSubMenu ? <FaChevronUp /> : <FaChevronDown />}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Menu;
