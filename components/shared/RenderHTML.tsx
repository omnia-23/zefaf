import React, { memo } from "react";
import sanitizeHtml from "sanitize-html";

export const RenderHTML = memo(
  ({
    htmlContent = "",
    renderInTable = false,
    length = 150,
  }: {
    htmlContent?: string;
    renderInTable?: boolean;
    length?: number;
  }) => {
    // Sanitize safely for server/client
    const sanitizedContent = sanitizeHtml(htmlContent || "", {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        "img",
        "h1",
        "h2",
      ]),
      allowedAttributes: {
        a: ["href", "name", "target"],
        img: ["src", "alt", "width", "height"],
      },
    });

    // Truncate if needed
    const truncatedContent =
      renderInTable && sanitizedContent.length > length
        ? `${sanitizedContent.slice(0, length)}...`
        : sanitizedContent;

    return <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />;
  }
);

RenderHTML.displayName = "RenderHTML";
