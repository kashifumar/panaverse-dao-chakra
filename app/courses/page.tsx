"use client";
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

export default function Page() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const file = `/content/courses/courses.md`;
      // console.log(file);
      const res = await fetch(file);
      const text = await res.text();
      setContent(text);
    };

    fetchData();
  });

  return (
    <Box>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Box>
  );
}
