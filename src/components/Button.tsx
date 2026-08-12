import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-neutral-950 text-white hover:bg-neutral-800",

  secondary:
    "border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50",

  outline:
    "border border-neutral-300 bg-transparent text-neutral-900 hover:bg-neutral-100",

  ghost:
    "bg-transparent text-neutral-700 hover:bg-neutral-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "rounded-lg px-3 py-2 text-xs",
  md: "rounded-xl px-5 py-3 text-sm",
  lg: "rounded-xl px-6 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center gap-2",
        "font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-neutral-300",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {icon && iconPosition === "left" && icon}

      <span>{children}</span>

      {icon && iconPosition === "right" && icon}
    </button>
  );
}