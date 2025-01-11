import { create } from 'zustand';

type PopupStore = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};

export const usePopupStore = create<PopupStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));