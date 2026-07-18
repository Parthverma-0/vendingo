"use client";

// Quiet paper canvas behind the whole page — a whisper of lavender at the
// top of the document and nothing else. Sections bring their own contrast.
export default function HoloBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-paper">
      <div className="absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(90%_100%_at_50%_0%,rgba(124,58,237,0.06),transparent_70%)]" />
    </div>
  );
}
