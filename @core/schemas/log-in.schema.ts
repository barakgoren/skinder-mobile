import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(3, "Password must be at least 3 characters long"),
})

export type LoginSchema = z.infer<typeof loginSchema>
export default loginSchema