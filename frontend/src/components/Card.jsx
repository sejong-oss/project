const heroStyle = "bg-primary-100 border-transparent";
const defaultStyle = "bg-white border-gray-200";
const mutedStyle = "bg-gray-50 border-transparent";

const PhotoPlaceholder = ({ className = "" }) => (
    <div className={`bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg ${className}`} />
);

export function RecipeCard({
    title,
    ingredients,
    match,
    time,
    difficulty,
    servings,
    variant = "default",
    image,
    onClick,
    className = "",
}) {
    const cardStyle = variant === "hero" ? heroStyle : variant === "muted" ? mutedStyle : defaultStyle;
    const labelColor = variant === "hero" ? "text-primary-600" : "text-primary-500";
    const metaColor = variant === "hero" ? "text-primary-700" : "text-gray-400";
    const ingColor = variant === "hero" ? "text-primary-700" : "text-gray-500";

    return (
        <div
            onClick={onClick}
            className={[
                "p-4 border rounded-[14px] flex flex-col gap-2.5",
                cardStyle,
                onClick ? "cursor-pointer hover:opacity-90 transition-opacity" : "",
                className,
            ].join(" ")}
        >
            {image
                ? <img src={image} alt={title} className="w-full h-32 object-cover rounded-lg" />
                : <PhotoPlaceholder className={variant === "hero" ? "h-40 from-primary-200 to-primary-300" : "h-32"} />
            }
            <div>
                {match != null && (
                    <p className={`text-xs font-mono font-semibold mb-1 ${labelColor}`}>
                        {variant === "hero" ? "HERO · 최선 조합" : `${match}% MATCH`}
                    </p>
                )}
                <p className="text-sm font-semibold text-gray-900">{title}</p>
                {ingredients && <p className={`text-xs mt-0.5 ${ingColor}`}>{ingredients}</p>}
            </div>
            {(time || difficulty || servings) && (
                <div className={`flex gap-1.5 text-xs font-mono ${metaColor}`}>
                    {time && <span>{time}</span>}
                    {time && difficulty && <span>·</span>}
                    {difficulty && <span>{difficulty}</span>}
                    {(time || difficulty) && servings && <span>·</span>}
                    {servings && <span>{servings}</span>}
                </div>
            )}
        </div>
    );
}

export function FeedCard({ title, ingredients, tags = [], likes, comments, image, onClick, className = "" }) {
    return (
        <div
            onClick={onClick}
            className={[
                "p-4 bg-white border border-gray-200 rounded-[14px] flex gap-3",
                onClick ? "cursor-pointer hover:bg-gray-50 transition-colors" : "",
                className,
            ].join(" ")}
        >
            {image
                ? <img src={image} alt={title} className="w-20 h-20 object-cover rounded-lg shrink-0" />
                : <PhotoPlaceholder className="w-20 h-20 shrink-0" />
            }
            <div className="flex flex-col gap-1 min-w-0">
                {tags.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap">
                        {tags.map((tag) => (
                            <span key={tag} className="inline-flex px-2 py-0.5 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <p className="text-sm font-semibold text-gray-900 truncate">{title}</p>
                {ingredients && <p className="text-xs text-gray-500 truncate">{ingredients}</p>}
                {(likes != null || comments != null) && (
                    <p className="text-xs font-mono text-gray-400 mt-auto">
                        {likes != null && `❤ ${likes}`}
                        {likes != null && comments != null && "  "}
                        {comments != null && `💬 ${comments}`}
                    </p>
                )}
            </div>
        </div>
    );
}
