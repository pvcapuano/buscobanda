export function navClass(isActive: boolean, mobile = false) {
  const base = mobile
    ? "flex flex-col items-center gap-0.5 px-3 py-2 text-[10px] font-mono uppercase transition-all duration-200 cursor-pointer"
    : "flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-mono uppercase transition-all duration-200 cursor-pointer";

  const hover = "hover:text-punch-warm hover:scale-[1.03]";

  return isActive ? `${base} text-punch` : `${base} text-muted ${hover}`;
}
