import type { ReactNode } from "react";

// Renders **marked** phrases in copy strings as bold highlights so key facts
// stand out. `tone` picks the strong color for light vs dark backgrounds.
export function em(text: string, tone: "light" | "dark" = "light"): ReactNode[] {
  const strongClass =
    tone === "dark" ? "font-semibold text-white" : "font-semibold text-ink";
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={strongClass}>
        {part}
      </strong>
    ) : (
      part
    )
  );
}
