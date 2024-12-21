import React, { useState, useRef } from "react";
import useIsTextOverflowing from "./useIsTextOverflowing";

const NotificationCard = ({ data }) => {
  const [expanded, setExpanded] = useState({}); // State to track expanded items
  const ref = useRef(null);
  const isOverflow = useIsTextOverflowing(ref, 2); // Check for overflow

  const toggleExpanded = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      {data.map((item) => {

        // Highlight notification words in the message
        const highlightedMessage = item.message.split(" ").map((word, index) =>
          word.includes(item.notification) ? (
            <a
              key={index}
              href={`#${item.notification}`}
              style={{ color: "#e20074", textDecoration: "underline" }}
            >
              {word}
            </a>
          ) : (
            ` ${word}`
          )
        );

        return (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <p
              ref={ref}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: expanded[item.id] ? "unset" : 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {highlightedMessage}
            </p>
            {isOverflow && !expanded[item.id] && (
              <span
                style={{
                  color: "#e20074",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={() => toggleExpanded(item.id)}
              >
                ...Show more
              </span>
            )}
            {expanded[item.id] && (
              <span
                style={{
                  color: "#e20074",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={() => toggleExpanded(item.id)}
              >
                Show less
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NotificationCard;
