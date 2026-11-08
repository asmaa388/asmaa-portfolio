"use client";
import { useEffect, useState } from "react";

export default function Today() {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(
      new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
        .replace(/^(\w+) /, "$1, ")
    );
  }, []);
  return <span suppressHydrationWarning>{text || " "}</span>;
}
