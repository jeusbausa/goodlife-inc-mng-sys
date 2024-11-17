import Avatar, { AvatarProps } from "boring-avatars";

type UserAvatarProps = {
    name: string;
    colors?: string[];
    variant?: AvatarProps["variant"];
    size?: string | number;
};

export function UserAvatar({
    name,
    colors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
    variant = "marble",
    size,
}: UserAvatarProps) {
    return <Avatar size={size} variant={variant} colors={colors} name={name} />;
}
