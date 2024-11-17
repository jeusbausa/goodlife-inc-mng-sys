type BadgeProps = {
    content: string;
};

export default function Badge({ content }: BadgeProps) {
    return (
        <span className="text-xs text-gray-100 bg-brand border-transparent border-solid rounded-full px-[5px]">
            {content}
        </span>
    );
}
