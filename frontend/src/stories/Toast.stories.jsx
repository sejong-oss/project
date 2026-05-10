import { Toast } from "../components/index.js";

export default { title: "Design System/Toast", component: Toast };

export const All = () => (
    <div className="p-8 bg-gray-100 font-sans flex flex-col gap-4">
        <Toast message="레시피가 저장됐어요." variant="success" />
        <Toast message="레시피를 불러오지 못했어요." variant="error" action="다시 시도" />
        <Toast message="공유 링크가 복사됐어요." variant="info" />
        <Toast message="재료 5개 이상 입력하면 더 정확해요." variant="default" />
    </div>
);
