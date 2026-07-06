import type { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32 ${className}`}
    >
      {children}
    </section>
  );
}
