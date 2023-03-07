import { Box, Flex, IconButton, Link, Text, Stack } from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "@/components/icons";
import Image from "next/image";
import NextLink from "next/link";
import { siteMetadata } from "@/content/siteMetadata";

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
            © 2023 {siteMetadata.author}. All rights reserved.
          </Text>
        </Box>
        {/* Second Section */}
        <Box mt={{ base: 4, md: 0 }}>
          <Stack direction="row" spacing={4}>
            <Link href={siteMetadata.facebook} isExternal>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                size="md"
                variant="ghost"
              />
            </Link>
            <Link href={siteMetadata.twitter} isExternal>
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="md"
                variant="ghost"
              />
            </Link>
            <Link href={siteMetadata.instagram} isExternal>
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                size="md"
                variant="ghost"
              />
            </Link>
            <Link href={siteMetadata.github} isExternal>
              <IconButton
                aria-label="Github"
                icon={<FaGithub />}
                size="md"
                variant="ghost"
              />
            </Link>
          </Stack>
        </Box>
        {/* Third Section */}
        <Box mt={{ base: 4, md: 0 }}>
          {/* <Text fontWeight="bold" mb={2}>
            Site Menu
          </Text> */}
          <Stack direction={{ base: "column", md: "row" }} spacing={2}>
            {/* <NextLink href="/" passHref> */}
            <Link href="/" mx={2}>
              Home
            </Link>
            {/* </NextLink> */}
            {/* <NextLink href="/courses" passHref> */}
            <Link href="/courses" mx={2}>
              Specializations
            </Link>
            {/* </NextLink> */}
            {/* <NextLink href="/topics" passHref> */}
            <Link href="/topics" mx={2}>
              Topics
            </Link>
            {/* </NextLink> */}
            {/* <NextLink href="/assignments" passHref> */}
            <Link href="/assignments" mx={2}>
              Assignments
            </Link>
            {/* </NextLink> */}
            {/* <NextLink href="/about-us" passHref> */}
            <Link href="/about-us" mx={2}>
              About Us
            </Link>
            {/* </NextLink> */}
            {/* <NextLink href="/contact-us" passHref> */}
            <Link href="/contact-us" mx={2}>
              Contact Us
            </Link>
            {/* </NextLink> */}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
