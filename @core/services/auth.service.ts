import { SignUpSchema } from "../schemas/sign-up.schema";
import { ServerUser, User } from "../types/user.type";
import http from "../utils/http";

class AuthService {
    static async createUser(data: SignUpSchema): Promise<User> {
        return http.post("/users", data);
    }

    static async login(data: { email: string; password: string }): Promise<User> {
        const res = await http.post<any>("/users/login", data);
        return this.serializeUser(res.user);
    }

    static serializeUser(user: ServerUser): User {
        return {
            id: user._id,
            username: user.username,
            email: user.email,
            type: user.type,
            firstName: user.firstName,
            lastName: user.lastName,
            dob: user.dob,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    }
}

export default AuthService;