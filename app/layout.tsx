"use client";
import "./globals.css";
import ChakraWrapper from "@/components/chakra";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Specializations",
    // href: "/courses",
    subMenu: [
      {
        name: "Core Courses",
        href: "/courses/core-courses",
      },
      {
        name: "Web 3.0 (Blockchain) and Metaverse",
        href: "/courses/web3-metaverse",
      },
      {
        name: "Artificial Intelligence (AI) and Deep Learning",
        href: "/courses/ai-deep-learning",
      },
      {
        name: "Cloud-Native Computing",
        href: "/courses/cloud-native-computing",
      },
      {
        name: "Ambient Computing and IoT",
        href: "/courses/ambient-computing-iot",
      },
    ],
  },
  {
    name: "Topics",
    // href: "/topics",
    subMenu: [
      {
        name: "HTML",
        href: "/topics/html",
      },
      {
        name: "CSS",
        href: "/topics/css",
      },
      {
        name: "JavaScript",
        href: "/topics/javascript",
      },
      {
        name: "TypeScript",
        href: "/topics/typescript",
      },
    ],
  },
  // {
  //   name: "Assignments",
  //   // href: "assignments",
  //   subMenu: [
  //     { name: "Assignment # 1", href: "assign1" },
  //     { name: "Assignment # 2", href: "assign2" },
  //   ],
  // },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];

const logo = "/images/panaverse_dao_logo.png";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraWrapper>
          <MenuBar menuItems={links} logo={logo} />
          {children}
          <Footer />
        </ChakraWrapper>
      </body>
    </html>
  );
}
