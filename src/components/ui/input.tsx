import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.ComponentProps<"input"> {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  isPassword?: boolean;
}

function Input({
  className,
  type,
  rightIcon,
  leftIcon,
  isPassword,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative w-full">
      {leftIcon && (
        <div className="absolute inset-y-0 left-2 flex items-center justify-center">
          {leftIcon}
        </div>
      )}
      <input
        type={inputType}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow,ring] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          leftIcon ? "pl-10" : "",
          rightIcon || isPassword ? "pr-10" : "",
          "focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {isPassword ? (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-2 flex items-center justify-center text-muted-foreground hover:text-foreground"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      ) : (
        rightIcon && (
          <div className="absolute inset-y-0 right-2 flex items-center">
            {rightIcon}
          </div>
        )
      )}
    </div>
  );
}

export { Input };
