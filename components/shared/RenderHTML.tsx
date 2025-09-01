import React, { memo, useEffect, useState } from "react";
import sanitizeHtml from "sanitize-html";

const clampMap: Record<number, string> = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6",
};

export const RenderHTML = memo(
  ({
    htmlContent = "",
    className = "",
    maxLines = 5, // default show 5 lines
    seeMore = true,
    seeAll = false,
  }: {
    htmlContent?: string;
    className?: string;
    maxLines?: number;
    seeMore?: boolean;
    seeAll?: boolean;
  }) => {
    const [expanded, setExpanded] = useState(false);
    const [style, setStyle] = useState("");

    useEffect(() => {
      const line = expanded ? "line-clamp-none" : `line-clamp-${maxLines}`;
      console.log({ line });
      setStyle(line);
    }, [expanded, maxLines]);

    // Decide final clamp style
    const clampClass = seeAll
      ? "line-clamp-none" // always show all
      : expanded
      ? "line-clamp-none"
      : clampMap[maxLines] ?? "line-clamp-5";

    const sanitizedContent = sanitizeHtml(htmlContent || "", {
      allowedTags: [
        // Text
        "p",
        "br",
        "span",
        "strong",
        "em",
        "b",
        "i",
        "u",
        "mark",
        "small",
        "blockquote",
        "code",
        "pre",

        // Headings
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",

        // Lists
        "ul",
        "ol",
        "li",
        "dl",
        "dt",
        "dd",

        // Tables
        "table",
        "thead",
        "tbody",
        "tfoot",
        "tr",
        "th",
        "td",

        // Media
        "img",
        "figure",
        "figcaption",
        "video",
        "audio",
        "source",

        // Links
        "a",

        // Layout / misc
        "div",
        "section",
        "article",
        "header",
        "footer",
        "nav",
        "aside",
        "hr",
      ],
      allowedAttributes: {
        a: ["href", "name", "target", "rel"],
        img: ["src", "alt", "width", "height"],
        video: [
          "src",
          "controls",
          "autoplay",
          "muted",
          "loop",
          "poster",
          "width",
          "height",
        ],
        audio: ["src", "controls", "autoplay", "muted", "loop"],
        source: ["src", "type"],
        "*": ["class", "id", "style"],
      },
      allowedStyles: {
        "*": {
          // allow any inline styles you need
          color: [/^.*$/],
          "font-size": [/^.*$/],
          "background-color": [/^.*$/],
          "text-align": [/^.*$/],
          margin: [/^.*$/],
          padding: [/^.*$/],
          // you can add more properties here
        },
      },
      disallowedTagsMode: "discard",
    });

    return (
      <div className="w-full">
        {/* Render HTML */}
        <div
          className={`${className} text-gray-800 leading-relaxed transition-all duration-300 ${clampClass}`}
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />

        {/* Show toggle only if seeMore is true and seeAll is false */}
        {seeMore && !seeAll && (
          <span
            className="mt-2 text-blue-500 hover:underline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "عرض أقل" : "عرض المزيد"}
          </span>
        )}
      </div>
    );
  }
);

RenderHTML.displayName = "RenderHTML";
