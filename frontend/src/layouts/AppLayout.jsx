import { Outlet } from "react-router-dom";
import { TopNav } from "@/components/Nav.jsx";
import { BottomTabBar } from "@/components/Nav.jsx";
import { Container } from "@/components/Container.jsx";

export default function AppLayout() {
    return (
        <div className="flex flex-col h-dvh">
            <TopNav className="hidden md:flex" />
            <main className="flex-1 overflow-y-auto">
                <Container className="py-6">
                    <Outlet />
                </Container>
            </main>
            <BottomTabBar className="flex md:hidden" />
        </div>
    );
}
