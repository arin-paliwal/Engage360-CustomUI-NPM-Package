import { default as React } from 'react';
interface AvatarProps {
    name: string;
    size: "sm" | "md";
    borderRadius: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
