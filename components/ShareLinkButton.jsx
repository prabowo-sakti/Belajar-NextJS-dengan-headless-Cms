"use client";

import { useState } from "react";

export default function SharelinkButton() {
  const [copied, setCopied] = useState(false);
  const HandleClick = (e) => {
    navigator.clipboard.writeText(window.location.href);
    e.preventDefault();
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button
      onClick={HandleClick}
      className=" px-2 py-1 rounded bg-gray-700 text-white text-sm hover:bg-gray-200 hover:text-gray-700 top-10"
    >
      {copied ? "Your Link Is Copied" : "Copy Link"}
    </button>
  );
}
