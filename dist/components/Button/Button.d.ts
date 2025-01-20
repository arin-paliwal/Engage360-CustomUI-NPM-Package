import { default as React } from 'react';
interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
