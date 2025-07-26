import DOMPurify from "dompurify";
import React from "react";
export const RenderHTML = ({
  htmlContent,
  renderInTable,
}: {
  htmlContent: string;
  renderInTable: boolean;
}) => {
  const sanitizedHTML = renderInTable
    ? DOMPurify.sanitize(htmlContent)?.length > 90
      ? DOMPurify.sanitize(htmlContent).slice(0, 90) + "..."
      : DOMPurify.sanitize(htmlContent)
    : DOMPurify.sanitize(htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};
