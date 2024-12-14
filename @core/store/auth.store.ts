import { create } from "zustand";
import { ServerUser, User } from "../types/user.type";
import { LoginSchema } from "../schemas/log-in.schema";
import AuthService from "../services/auth.service";

// TODO: Add types here
type AuthStore = {
    user: User | null;
    login: (data: LoginSchema) => void;
    logout: () => void;
    checkToken: () => Promise<any>;
};

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    login: async (data) => {
        const user: User = await AuthService.login(data);
        set({ user: user });
    },
    logout: () => {
        // TODO: Add server logic here
        set({ user: null });
    },
    checkToken: async () => {
        // TODO: Add localStorage logic here
        return null;
    },
}));