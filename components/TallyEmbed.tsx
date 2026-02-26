"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function TallyEmbed() {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Re-trigger Tally embed loading after client-side navigation
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <iframe
      ref={ref}
      data-tally-src="https://tally.so/embed/LZdzVv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="500"
      frameBorder="0"
      title="Tell Us Your Idea"
    />
  );
}
