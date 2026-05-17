import { useState } from "react";
import { Favorite, FavoriteFilled, Growth, Time, Category, UserMultiple } from "@carbon/icons-react";
import { Chip } from "@/components/Chip.jsx";
import { Avatar } from "@/components/Avatar.jsx";

const cardVariants = {
    default: "bg-white border-gray-200",
    hero: "bg-primary-100 border-transparent",
    muted: "bg-gray-50 border-transparent",
};

const PhotoPlaceholder = ({ className = "" }) => (
    <div className={`bg-linear-to-br from-primary-100 to-primary-200 rounded-lg ${className}`} />
);

export function Card({ children, variant = "default", onClick, className = "" }) {
    return (
        <div
            onClick={onClick}
            className={[
                "p-4 border rounded-card flex flex-col gap-2.5",
                cardVariants[variant],
                onClick ? "cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-md" : "",
                className,
            ].join(" ")}
        >
            {children}
        </div>
    );
}

export function RecipeCard({
    title,
    time,
    difficulty,
    servings,
    description,
    variant = "default",
    image,
    onClick,
    className = "",
}) {
    return (
        <Card variant={variant} onClick={onClick} className={className}>
            {image
                ? <img src={image} alt={title} className="w-full h-32 object-cover rounded-lg" />
                : <PhotoPlaceholder className={variant === "hero" ? "h-40 from-primary-200 to-primary-300" : "h-32"} />
            }
            <div className="flex flex-col gap-1.5 items-start">
                {variant === "hero" && <Chip variant="brand">최선 조합</Chip>}
                <p className="text-base font-semibold text-gray-900">{title}</p>
                {description && (
                    <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">{description}</p>
                )}
            </div>
            {(time || difficulty || servings) && (
                <div className="flex gap-1.5 flex-wrap">
                    {time && (
                        <Chip variant="neutral">
                            <Time size={12} />
                            {time}
                        </Chip>
                    )}
                    {difficulty && (
                        <Chip variant="neutral">
                            <Growth size={12} />
                            {difficulty}
                        </Chip>
                    )}
                    {servings && (
                        <Chip variant="neutral">
                            <UserMultiple size={12} />
                            {servings}
                        </Chip>
                    )}
                </div>
            )}
        </Card>
    );
}

export function FeedCard({ title, time, category, difficulty, image, author, likes, onClick, className = "" }) {
    const [liked, setLiked] = useState(false);

    return (
        <div
            onClick={onClick}
            className={[
                "bg-white border border-gray-200 rounded-card overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-md flex flex-col",
                className,
            ].join(" ")}
        >
            <div className="relative w-full h-28 lg:h-40">
                {image
                    ? <img src={image} alt={title} className="w-full h-full object-cover" />
                    : <PhotoPlaceholder className="w-full h-full rounded-none" />
                }
                <button
                    onClick={(e) => { e.stopPropagation(); setLiked((v) => !v); }}
                    className={["absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-white/75 backdrop-blur-sm text-xs transition-colors", liked ? "text-primary-500" : "text-gray-500"].join(" ")}
                >
                    {liked ? <FavoriteFilled size={12} /> : <Favorite size={12} />}
                    <span className={liked ? "font-semibold" : ""}>{likes + (liked ? 1 : 0)}</span>
                </button>
            </div>
            <div className="flex flex-col gap-2.5 p-2.5 lg:p-4 flex-1">
                <p className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">{title}</p>
                <div className="flex gap-1 flex-wrap">
                    {time && <Chip variant="neutral"><Time size={11} />{time}</Chip>}
                    {category && <Chip variant="neutral"><Category size={11} />{category}</Chip>}
                    {difficulty && <Chip variant="neutral"><Growth size={11} />{difficulty}</Chip>}
                </div>
                <div className="flex items-center gap-1.5 mt-auto pt-1">
                    <Avatar name={author} size="sm" />
                    <span className="text-xs text-gray-500 font-medium truncate">@{author}</span>
                </div>
            </div>
        </div>
    );
}
