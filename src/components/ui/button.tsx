type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
};

function Button({ children, onClick, type = "button", variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-white text-indigo-700 border-2 border-indigo-600 hover:bg-indigo-50",
    outline: "border-2 border-white text-white hover:bg-white/10",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;