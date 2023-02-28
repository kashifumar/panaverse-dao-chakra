import { Box, Flex, IconButton, Link, Text, Stack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "@/components/icons";
import Image from "next/image";
import NextLink from "next/link";
export default function Footer() {
  return (
    <Box bg="gray.800" color="white">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "start", md: "center" }}
        px={6}
        py={8}
        maxW="7xl"
        mx="auto"
      >
        {/* First Section */}
        <Box>
          <Image
            src="/images/panaverse_dao_logo.png"
            alt="Logo"
            width={48}
            height={48}
          />
          <Text fontSize="sm" mt={2}>
            © 2023 Company Name. All rights reserved.
          </Text>
        </Box>

        {/* Second Section */}
        <Box mt={{ base: 4, md: 0 }}>
          <Stack direction="row" spacing={4}>
            <Link href="#" isExternal>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                size="md"
                variant="ghost"
              />
            </Link>
            <Link href="#" isExternal>
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="md"
                variant="ghost"
              />
            </Link>
            <Link href="#" isExternal>
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                size="md"
                variant="ghost"
              />
            </Link>
          </Stack>
        </Box>

        {/* Third Section */}
        <Box mt={{ base: 4, md: 0 }}>
          <Text fontWeight="bold" mb={2}>
            Site Menu
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={2}>
            <NextLink href="/" passHref>
              <Link mx={2}>Home</Link>
            </NextLink>
            <NextLink href="/about" passHref>
              <Link mx={2}>About</Link>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Link mx={2}>Contact</Link>
            </NextLink>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
