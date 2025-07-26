import DOMPurify from "dompurify";
import React from "react";

export const RenderHTML = ({
  htmlContent,
  renderInTable,
  length = 150,
}: {
  htmlContent: string;
  renderInTable: boolean;
  length?: number;
}) => {
  const sanitizedHTML = renderInTable
    ? DOMPurify.sanitize(htmlContent)?.length > length
      ? DOMPurify.sanitize(htmlContent).slice(0, length) + "..."
      : DOMPurify.sanitize(htmlContent)
    : DOMPurify.sanitize(htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};
