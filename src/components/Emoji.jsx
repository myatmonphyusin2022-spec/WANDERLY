import { useEffect, useRef } from "react";
import twemoji from "@twemoji/api";

function Emoji({ emoji, className = "w-16 h-16" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      twemoji.parse(ref.current, {
        folder: "svg",
        ext: ".svg",
      });
    }
  }, [emoji]);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {emoji}
    </span>
  );
}

export default Emoji;
