import React, { memo } from "react";
import sanitizeHtml from "sanitize-html";

export const RenderHTML = memo(
  ({
    htmlContent = "",
    className = "",
  }: {
    htmlContent?: string;
    className?: string;
  }) => {
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
        "*": ["class", "id", "style"], // allow styling attributes everywhere
      },

      // strip out scripts, styles, iframes, etc.
      disallowedTagsMode: "discard",
    });

    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    );
  }
);

RenderHTML.displayName = "RenderHTML";
