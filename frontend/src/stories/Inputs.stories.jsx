import { useState } from "react";
import { Input, TagInput } from "../components/index.js";

const SearchIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
    </svg>
);

export default { title: "Design System/Inputs" };

export const AllInputs = () => (
    <div className="p-8 bg-white font-sans flex flex-col gap-6 max-w-sm">
        <Input placeholder="재료를 입력하세요" icon={<SearchIcon />} />
        <Input placeholder="포커스 상태" icon={<SearchIcon />} defaultValue="두부" />
        <Input placeholder="오류 상태" error errorMessage="올바른 재료명을 입력해주세요." />
        <Input placeholder="비활성 입력" disabled />
    </div>
);

export const TagInputDemo = () => {
    const [tags, setTags] = useState(["양파", "계란", "대파"]);
    return (
        <div className="p-8 bg-white font-sans max-w-sm">
            <p className="text-xs font-mono text-gray-400 mb-3">Enter 또는 쉼표로 태그 추가</p>
            <TagInput
                tags={tags}
                onAdd={(t) => setTags([...tags, t])}
                onRemove={(t) => setTags(tags.filter((x) => x !== t))}
                placeholder="재료를 입력하세요"
            />
        </div>
    );
};
