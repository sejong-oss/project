import { useState } from "react";
import { Outlet } from "react-router-dom";
import { TopNav } from "@/components/Nav.jsx";
import { BottomTabBar } from "@/components/Nav.jsx";
import { Container } from "@/components/Container.jsx";
import { LoginModal } from "@/components/index.js";

export default function AppLayout() {
    const [loginOpen, setLoginOpen] = useState(false);
    const openLoginModal = () => setLoginOpen(true);

    return (
        <div className="flex flex-col h-dvh">
            <TopNav className="hidden md:block" onLoginClick={openLoginModal} />
            <main className="flex-1 overflow-y-auto">
                <Container className="py-6">
                    <Outlet context={{ openLoginModal }} />
                </Container>
            </main>
            <BottomTabBar className="flex md:hidden" />
            <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
        </div>
    );
}
