import { Toaster } from "sonner";
import "../src/assets/index.css";

export const decorators = [
    (Story) => (
        <>
            <Story />
            <Toaster
                position="bottom-center"
                toastOptions={{
                    unstyled: true,
                    classNames: {
                        toast: "flex items-center gap-3 px-4 py-3 rounded-card text-sm font-medium shadow-lg font-sans",
                        default: "bg-gray-900 text-white",
                        success: "bg-green-600 text-white",
                        error: "bg-red-600 text-white",
                        warning: "bg-gray-700 text-white",
                        info: "bg-primary-500 text-white",
                        actionButton: "ml-auto text-xs font-semibold opacity-75 hover:opacity-100 underline underline-offset-2",
                    },
                }}
            />
        </>
    ),
];

export const parameters = {
    options: {
        storySort: {
            order: ["Design System", ["Overview", "*"]],
        },
    },
    backgrounds: {
        default: "white",
        values: [
            { name: "white", value: "#ffffff" },
            { name: "gray-50", value: "#fafaf9" },
            { name: "gray-100", value: "#f4f2ee" },
        ],
    },
};
