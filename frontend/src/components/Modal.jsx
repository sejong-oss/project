import * as Dialog from "@radix-ui/react-dialog";
import { Close } from "@carbon/icons-react";

export function Modal({ open, onOpenChange, children }) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            {children}
        </Dialog.Root>
    );
}

export function ModalTrigger({ children }) {
    return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
}

export function ModalContent({ title, description, children, size = "md" }) {
    const sizes = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
    };

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-overlay z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <Dialog.Content
                className={[
                    "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)]",
                    "bg-white rounded-modal shadow-xl p-6 outline-none",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out",
                    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                    "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
                    "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
                    sizes[size],
                ].join(" ")}
            >
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                        {title && (
                            <Dialog.Title className="text-lg font-semibold text-gray-900 tracking-tight">
                                {title}
                            </Dialog.Title>
                        )}
                        {description && (
                            <Dialog.Description className="mt-1 text-sm text-gray-500">
                                {description}
                            </Dialog.Description>
                        )}
                    </div>
                    <Dialog.Close className="flex-shrink-0 p-1 rounded-btn text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
                        <Close size={18} />
                    </Dialog.Close>
                </div>
                {children}
            </Dialog.Content>
        </Dialog.Portal>
    );
}

export function ModalFooter({ children }) {
    return (
        <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-gray-100">
            {children}
        </div>
    );
}

export function ModalClose({ children }) {
    return <Dialog.Close asChild>{children}</Dialog.Close>;
}
