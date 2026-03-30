type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/buscobanda-icon-removebg.png"
      alt="BuscoBanda"
      className={className ?? "w-10 h-8 object-contain"}
    />
  );
}
