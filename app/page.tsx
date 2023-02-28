"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useClient } from "react-fetching-library";
import type { ReactNode } from "react";
const MotionBox = motion(Box);

const BlueSection = () => {
  const { query } = useClient();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await query({ method: "GET", endpoint: "/api/data" });
      setData(result.payload);
    }
    fetchData();
  }, [query]);

  return (
    <MotionBox
      initial={{ opacity: 0, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      // width="50%"
      width={{ base: "100%", md: "50%" }}
      height="35vh"
      backgroundColor="blue.900"
      padding="6"
      color="white"
    >
      <Heading mb="4">
        Web 3.0 (Blockchain) and Metaverse Specialization
      </Heading>
      <Text fontSize="xl">
        This Web 3.0 and Metaverse specialization focuses on developing
        full-stack Web 3.0 and Metaverse experiences for the next generation of
        the internet by specializing in building worlds that merge the best of
        cutting-edge decentralized distributed blockchains with 3D metaverse
        client experiences.
      </Text>
      <Text mt="4">Data from server: {JSON.stringify(data)}</Text>
    </MotionBox>
  );
};

type MainSectionProps = {
  title: string;
  children: ReactNode;
  // maxW: string;
  // bgColor: string;

  initialOpacity: string;
  initialY: string;
  animateOpacity: string;
  animateY: string;
  transitionDuration: string;
  widthBase: string;
  widthMD: string;
  height: string;
  bgColor: string;
  padding: string;
  color: string;
};

const MainSection = (props: MainSectionProps) => {
  const { query } = useClient();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await query({ method: "GET", endpoint: "/api/data" });
      setData(result.payload);
    }
    fetchData();
  }, [query]);

  return (
    <MotionBox
      initial={{ opacity: props.initialOpacity, y: props.initialY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: props.transitionDuration }}
      // width="50%"
      width={{ base: props.widthBase, md: "50%" }}
      height={props.height}
      backgroundColor={props.bgColor}
      padding={props.padding}
      color={props.color}
    >
      <Heading mb="4">{props.title}</Heading>
      <Text fontSize="xl">{props.children}</Text>
    </MotionBox>
  );
};
export default function Home() {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        backgroundColor="gray.100"
      >
        <MainSection
          title="Web 3.0 (Blockchain) and Metaverse Specialization"
          initialOpacity="0"
          initialY="150"
          animateOpacity="1"
          animateY="0"
          transitionDuration="1"
          widthBase="100%"
          widthMD="50%"
          height="38vh"
          bgColor="green.500"
          padding="6"
          color="white"
        >
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </MainSection>

        <MainSection
          title="Artificial Intelligence (AI) and Deep Learning Specialization"
          initialOpacity="0"
          initialY="150"
          animateOpacity="1"
          animateY="0"
          transitionDuration="1"
          widthBase="100%"
          widthMD="50%"
          height="38vh"
          bgColor="blue.900"
          padding="6"
          color="white"
        >
          The AI and Deep Learning specialization focuses on building and
          deploying intelligent APIs using OpenAI models and building custom
          Deep Learning Tensorflow models.
        </MainSection>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        backgroundColor="gray.100"
      >
        <MainSection
          title="Cloud-Native Computing Specialization"
          initialOpacity="0"
          initialY="-150"
          animateOpacity="1"
          animateY="0"
          transitionDuration="1"
          widthBase="100%"
          widthMD="50%"
          height="35vh"
          bgColor="blue.700"
          padding="6"
          color="white"
        >
          The Cloud-Native Computing Specialization focuses on Containers,
          Kubernetes, and CDK for Kubernetes.
        </MainSection>

        <MainSection
          title="Ambient Computing and IoT Specialization"
          initialOpacity="0"
          initialY="-150"
          animateOpacity="1"
          animateY="0"
          transitionDuration="1"
          widthBase="100%"
          widthMD="50%"
          height="35vh"
          bgColor="green.700"
          padding="6"
          color="white"
        >
          The Ambient Computing and IoT Specialization focuses on building Smart
          Homes, Offices, Factories, and Cities using Voice computing, Matter
          and Embedded Devices.
        </MainSection>
      </Flex>
    </>
  );
}
