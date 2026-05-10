import { Skeleton, RecipeCardSkeleton, FeedCardSkeleton } from "../components/index.js";

export default { title: "Design System/Skeleton" };

export const Base = () => (
    <div className="p-8 bg-white font-sans flex flex-col gap-3 max-w-sm">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
    </div>
);

export const RecipeCard = () => (
    <div className="p-8 bg-white font-sans grid grid-cols-2 gap-4 max-w-lg">
        <RecipeCardSkeleton variant="hero" />
        <RecipeCardSkeleton />
    </div>
);

export const FeedCard = () => (
    <div className="p-8 bg-white font-sans flex flex-col gap-3 max-w-sm">
        <FeedCardSkeleton />
        <FeedCardSkeleton />
    </div>
);
