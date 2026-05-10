import { RecipeCard, FeedCard } from "../components/index.js";

export default { title: "Design System/Cards" };

export const RecipeCards = () => (
    <div className="p-8 bg-gray-100 font-sans flex flex-col gap-8">
        <div>
            <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Hero</p>
            <div className="max-w-xs">
                <RecipeCard variant="hero" title="계란볶음밥" time="15분" difficulty="쉬움" servings="2인분" />
            </div>
        </div>
        <div>
            <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Default</p>
            <div className="max-w-xs">
                <RecipeCard title="두부 간장조림" match={98} time="20분" difficulty="쉬움" />
            </div>
        </div>
        <div>
            <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Grid (3-col)</p>
            <div className="grid grid-cols-3 gap-3 max-w-xl">
                <RecipeCard title="두부 간장조림" match={98} time="20분" difficulty="쉬움" />
                <RecipeCard title="된장찌개" match={76} time="30분" difficulty="보통" />
                <RecipeCard title="계란말이" match={42} time="15분" difficulty="쉬움" />
            </div>
        </div>
    </div>
);

export const FeedCards = () => (
    <div className="p-8 bg-white font-sans flex flex-col gap-3 max-w-sm">
        <FeedCard title="직접 만든 두부 간장조림" author="모카" tags={["한식", "쉬움"]} likes={24} comments={3} />
        <FeedCard title="냉장고 털기 볶음밥" author="밥먹자" tags={["한식", "30분"]} likes={12} comments={1} />
    </div>
);
