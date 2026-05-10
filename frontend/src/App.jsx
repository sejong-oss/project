import { ToasterProvider } from "@/components/ToasterProvider.jsx";
import Onboarding from "@/pages/Onboarding.jsx";

export default function App() {
    return (
        <>
            <ToasterProvider />
            <Onboarding />
        </>
    );
}
