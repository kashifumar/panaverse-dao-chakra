"use client";
import { useState } from "react";
import React from "react";
import { Image, Box, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { Stack, Link } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { useTheme, useBreakpointValue } from "@chakra-ui/react";

interface MenuItem {
  name: string;
  href: string;
  subMenu?: {
    name: string;
    href: string;
  }[];
}

interface MenuProps {
  menuItems: MenuItem[];
}

const MenuBar: React.FC<MenuProps> = ({ menuItems }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const maxW = useBreakpointValue({ base: "full", md: "container.xl" });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box bg={colorMode === "light" ? "gray.50" : "gray.900"}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={["1rem", "2rem"]}
      >
        {/* Logo image here */}
        <Box>
          <Image
            src="/images/panaverse_dao_logo.png"
            alt="Logo"
            width="48px"
            height="48px"
          />
        </Box>
        {/* Hamburger menu for mobile screens */}
        <IconButton
          aria-label="Mobile menu"
          icon={isOpen ? <AiOutlineClose /> : <IoIosMenu />}
          display={{ base: "flex", md: "none" }}
          onClick={() => setIsOpen(!isOpen)}
        />
        {/* Dark mode switcher button for large screens */}
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          display={{ base: "none", md: "flex" }}
        />
        {/* Menu items here */}
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          justify="flex-end"
          spacing={4}
        >
          {menuItems.map((menuItem) => (
            <Box key={menuItem.name}>
              {menuItem.subMenu ? (
                <Menu>
                  <MenuButton
                    as={Link}
                    p={2}
                    href={menuItem.href}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {menuItem.name}
                  </MenuButton>
                  <MenuList>
                    {menuItem.subMenu.map((subMenuItem) => (
                      <Link
                        key={subMenuItem.name}
                        href={subMenuItem.href}
                        p={2}
                        _hover={{
                          bg: "blue.500",
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        {subMenuItem.name}
                      </Link>
                    ))}
                  </MenuList>
                </Menu>
              ) : (
                <Link
                  href={menuItem.href}
                  p={2}
                  _hover={{
                    bg: "blue.500",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {menuItem.name}
                </Link>
              )}
            </Box>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};

export default MenuBar;
