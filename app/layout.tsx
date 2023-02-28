"use client";

// import './globals.css'
import ChakraWrapper from "@/components/chakra";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
    subMenu: [
      {
        name: "Mission",
        link: "/about/mission",
      },
      {
        name: "Team",
        link: "/about/team",
      },
    ],
  },
  {
    name: "Services",
    link: "/services",
    subMenu: [
      {
        name: "Web Design",
        link: "/services/web-design",
      },
      {
        name: "SEO",
        link: "/services/seo",
      },
      {
        name: "Social Media",
        link: "/services/social-media",
      },
    ],
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const logo = "/public/images/panaverse_dao_logo.png";
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
