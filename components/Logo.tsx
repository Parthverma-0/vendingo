export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl iris-gradient animate-iris-drift">
        <span className="absolute inset-[1.5px] rounded-[10px] bg-canvas-deep/85" />
        <span className="relative z-10 text-base font-bold text-white">V</span>
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-white">
        Vendi <span className="iris-text">&apos;N&apos;</span> Go
      </span>
    </span>
  );
}
