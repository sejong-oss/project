import { Button } from "@/components/Button.jsx";

export function EmptyState({ icon, title, description, action, onAction, className = "" }) {
    return (
        <div className={`flex flex-col items-center gap-3 py-16 px-8 text-center ${className}`}>
            {icon && (
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                    {icon}
                </div>
            )}
            <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-gray-900">{title}</p>
                {description && <p className="text-sm text-gray-500">{description}</p>}
            </div>
            {action && (
                <Button variant="primary" size="md" onClick={onAction} className="mt-1">
                    {action}
                </Button>
            )}
        </div>
    );
}
