import DOMPurify from "dompurify";
import React, { memo } from "react";

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
    // Sanitize only once
    const sanitizedContent = DOMPurify.sanitize(htmlContent || "");

    // Truncate if needed
    const truncatedContent =
      renderInTable && sanitizedContent.length > length
        ? `${sanitizedContent.slice(0, length)}...`
        : sanitizedContent;

    return <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />;
  }
);

RenderHTML.displayName = "RenderHTML"; // Helps with debugging in React DevTools
