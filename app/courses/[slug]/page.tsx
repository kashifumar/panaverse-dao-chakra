"use client";
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

const courseLinks = [
  "core-courses",
  "web3-metaverse",
  "ai-deep-learning",
  "cloud-native-computing",
  "ambient-computing-iot",
];
export default function Page({ params }: { params: { slug: string } }) {
  const post = courseLinks.find((link) => link === params.slug);

  if (!post) {
    notFound();
  }
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const file = `/content/courses/${params.slug}.md`;
      const res = await fetch(file);
      const text = await res.text();
      setContent(text);
    };

    fetchData();
  }, [params.slug]);

  return (
    <Box>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Box>
  );
}
