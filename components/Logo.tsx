import Image from "next/image";

export default function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-lg border border-ink/10 bg-white">
        <Image
          src="/vendingo_logo.png"
          alt=""
          width={26}
          height={25}
          className="h-[25px] w-[26px] object-contain"
        />
      </span>
      <span
        className={`font-display text-[15px] font-bold tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        Vendi <span className="text-violet">&apos;N&apos;</span> Go
      </span>
    </span>
  );
}
