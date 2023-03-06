import { Box, Flex, IconButton, Link, Text, Stack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "@/components/icons";
import Image from "next/image";
import NextLink from "next/link";
import { useEffect } from "react";

export default function Footer2() {
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
              <Box as="a" href="/" mx={2}>
                Home
              </Box>
            </NextLink>
            <NextLink href="/courses" passHref>
              <Box as="a" href="/courses" mx={2}>
                Specializations
              </Box>
            </NextLink>
            <NextLink href="/topics" passHref>
              <Box as="a" href="/topics" mx={2}>
                Topics
              </Box>
            </NextLink>
            <NextLink href="/assignments" passHref>
              <Box as="a" href="/assignments" mx={2}>
                Assignments
              </Box>
            </NextLink>
            <NextLink href="/about-us" passHref>
              <Box as="a" href="/about-us" mx={2}>
                About Us
              </Box>
            </NextLink>
            <NextLink href="/contact-us" passHref>
              <Box as="a" href="/contact-us" mx={2}>
                Contact Us
              </Box>
            </NextLink>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
