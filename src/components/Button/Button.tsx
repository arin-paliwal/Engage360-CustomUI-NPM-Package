import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
}) => {
  const baseStyle =
    "flex items-center gap-2 text-sm px-4 py-[.6rem] rounded-lg ";
  const styles = {
    primary: "bg-[#3C41E9] text-white hover:opacity-90",
    secondary: "bg-[#F3F4F6] text-[#3C41E9] hover:bg-[#E5E7EB]",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
