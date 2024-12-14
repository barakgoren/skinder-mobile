import { z } from 'zod'

export const signUpSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(3, "Password must be at least 3 characters long"),
    username: z
        .string()
        .regex(
            /^[a-zA-Z0-9_.]{3,16}$/,
            "Username must be 3-16 characters long, containing only letters, numbers, underscores, or dots, with no spaces"
        ),
})

export type SignUpSchema = z.infer<typeof signUpSchema>
export default signUpSchema