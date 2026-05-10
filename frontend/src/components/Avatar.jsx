const sizes = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-12 h-12 text-base",
};

export function Avatar({ src, name, size = "md", badge, className = "" }) {
    const initials = name?.slice(0, 1) ?? "?";

    return (
        <div className={`relative inline-flex shrink-0 ${className}`}>
            {src
                ? <img src={src} alt={name} className={`${sizes[size]} rounded-full object-cover bg-gray-100`} />
                : (
                    <div className={`${sizes[size]} rounded-full bg-primary-100 text-primary-700 font-semibold flex items-center justify-center`}>
                        {initials}
                    </div>
                )
            }
            {badge != null && (
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {badge > 9 ? "9+" : badge}
                </span>
            )}
        </div>
    );
}
