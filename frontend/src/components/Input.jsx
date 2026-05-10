export function Input({
    placeholder,
    value,
    onChange,
    error,
    errorMessage,
    disabled = false,
    icon,
    className = "",
    ...props
}) {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            <div className={[
                "flex items-center gap-2 px-3.5 py-3 rounded-input text-sm transition-colors",
                error
                    ? "bg-red-50 border border-red-300"
                    : "bg-gray-50 border border-gray-200 focus-within:border-primary-500 focus-within:bg-white",
                disabled ? "opacity-50 cursor-not-allowed" : "",
            ].join(" ")}>
                {icon && <span className="text-gray-400 shrink-0">{icon}</span>}
                <input
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="bg-transparent outline-none w-full text-gray-900 placeholder:text-gray-400 disabled:cursor-not-allowed"
                    {...props}
                />
            </div>
            {error && errorMessage && (
                <p className="text-xs text-red-500">{errorMessage}</p>
            )}
        </div>
    );
}

export function TagInput({ tags = [], onAdd, onRemove, placeholder = "입력하세요", className = "" }) {
    const handleKeyDown = (e) => {
        if ((e.key === "Enter" || e.key === ",") && e.target.value.trim()) {
            e.preventDefault();
            onAdd?.(e.target.value.trim());
            e.target.value = "";
        }
        if (e.key === "Backspace" && !e.target.value && tags.length > 0) {
            onRemove?.(tags[tags.length - 1]);
        }
    };

    return (
        <div className={[
            "flex flex-wrap gap-1.5 px-3.5 py-2.5 bg-white border border-gray-200 rounded-input",
            "focus-within:border-primary-500 transition-colors",
            className,
        ].join(" ")}>
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full"
                >
                    {tag}
                    <button
                        type="button"
                        onClick={() => onRemove?.(tag)}
                        className="text-primary-400 hover:text-primary-600 leading-none"
                    >
                        ×
                    </button>
                </span>
            ))}
            <input
                onKeyDown={handleKeyDown}
                placeholder={tags.length === 0 ? placeholder : ""}
                className="bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-400 min-w-24 py-0.5"
            />
        </div>
    );
}
