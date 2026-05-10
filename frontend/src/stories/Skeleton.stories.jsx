import { Skeleton, CardSkeleton, FeedSkeleton } from "../components/index.js";

export default { title: "Design System/Skeleton" };

export const Base = () => (
    <div className="p-8 bg-white font-sans flex flex-col gap-3 max-w-sm">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
    </div>
);

export const CardSkeletonStory = () => (
    <div className="p-8 bg-white font-sans grid grid-cols-2 gap-4 max-w-lg">
        <CardSkeleton variant="hero" />
        <CardSkeleton />
    </div>
);
CardSkeletonStory.storyName = "Card";

export const FeedSkeletonStory = () => (
    <div className="p-8 bg-white font-sans flex flex-col gap-3 max-w-sm">
        <FeedSkeleton />
        <FeedSkeleton />
    </div>
);
FeedSkeletonStory.storyName = "Feed";
