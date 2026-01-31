import * as React from "react";

/**
 * Visually hidden content, still available to screen readers.
 * Useful for accessible labels/titles that shouldn't be displayed.
 */
export function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
}

