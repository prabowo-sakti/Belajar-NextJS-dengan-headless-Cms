"use client";

import { LinkIcon } from "@heroicons/react/20/solid";

import { useState } from "react";

export default function SharelinkButton({ className }) {
  const [copied, setCopied] = useState(false);
  const HandleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button
      onClick={HandleClick}
      className={`border flex gap-1 items-center  px-2 py-1 rounded bg-gray-700 text-white text-sm hover:bg-gray-200 hover:text-gray-700 top-10 ${className} `}
    >
      <LinkIcon className="h-4 w-4" />
      {copied ? "Your Link Is Copied" : "Copy Link"}
    </button>
  );
}
