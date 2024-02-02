
interface ContainerProps {
    children: React.ReactNode,
    className: string
}

export default function Container({
    children,
    className
}: ContainerProps) {
    return (
        <div className={`min-h-dvh ${className}`}>
            <div className="max-w-5xl mx-auto p-5">
                {children}
            </div>
        </div>
    )
}
