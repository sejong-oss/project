const NAV_ITEMS = [
    { key: "home",    label: "홈" },
    { key: "results", label: "추천" },
    { key: "feed",    label: "피드" },
];

export function TopNav({ active = "home", user, onNavClick, className = "" }) {
    return (
        <div className={`flex items-center gap-7 px-7 py-3.5 border-b border-gray-200 bg-white ${className}`}>
            <div className="px-2.5 py-1 bg-gray-100 border border-dashed border-gray-300 rounded-md text-xs font-mono text-gray-400 shrink-0">로고</div>
            <nav className="flex gap-6 flex-1">
                {NAV_ITEMS.map(({ key, label }) => (
                    <span
                        key={key}
                        onClick={() => onNavClick?.(key)}
                        className={[
                            "text-sm font-medium cursor-pointer pb-px relative",
                            active === key
                                ? "text-gray-900 after:absolute after:left-0 after:right-0 after:-bottom-[15px] after:h-[2px] after:bg-primary-500 after:rounded-sm"
                                : "text-gray-500 hover:text-gray-700",
                        ].join(" ")}
                    >
                        {label}
                    </span>
                ))}
            </nav>
            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold flex items-center justify-center cursor-pointer">
                {user?.name?.slice(0, 1) ?? "?"}
            </div>
        </div>
    );
}

import { Home, Recommend, ShowDataCards, UserAvatar } from "@carbon/icons-react";

const TAB_ITEMS = [
    { key: "home",    label: "홈",  Icon: Home },
    { key: "results", label: "추천", Icon: Recommend },
    { key: "feed",    label: "피드", Icon: ShowDataCards },
    { key: "my",      label: "MY",  Icon: UserAvatar },
];

export function BottomTabBar({ active = "home", onChange, className = "" }) {
    return (
        <div className={`flex bg-white border-t border-gray-200 pb-5 ${className}`}>
            {TAB_ITEMS.map(({ key, label, Icon }) => (
                <div
                    key={key}
                    onClick={() => onChange?.(key)}
                    className={`flex-1 flex flex-col items-center gap-1 pt-2 cursor-pointer ${active === key ? "text-primary-500" : "text-gray-400"}`}
                >
                    <Icon size={24} />
                    <span className={`text-xs ${active === key ? "font-semibold" : "font-medium"}`}>{label}</span>
                </div>
            ))}
        </div>
    );
}
