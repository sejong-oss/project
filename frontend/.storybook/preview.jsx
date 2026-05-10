import { ToasterProvider } from "@/components/ToasterProvider.jsx";
import "@/assets/index.css";

export const decorators = [
    (Story) => (
        <>
            <Story />
            <ToasterProvider />
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
