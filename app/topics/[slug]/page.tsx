"use client";
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

const topicLinks = ["html", "css", "javascript", "typescript"];
export default function Page({ params }: { params: { slug: string } }) {
  const post = topicLinks.find((link) => link === params.slug);

  if (!post) {
    notFound();
  }
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const file = `/content/topics/${params.slug}.mdx`;
      // console.log(file);
      const res = await fetch(file);
      // const res = await fetch(`/content/README.md`);
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
