const { z } = require("zod");

const registerSchema = z.object({
    name: z.string()
        .trim()
        .min(2, "Name must contain at least 2 characters")
        .max(50),

    email: z.string()
        .trim()
        .email("Invalid email address")
        .transform(value => value.toLowerCase()),

    password: z.string()
        .min(8, "Password must contain at least 8 characters")
        .max(72, "Password is too long")
});

const loginSchema = z.object({
    email: z.string()
        .trim()
        .email("Invalid email address")
        .transform(value => value.toLowerCase()),

    password: z.string()
        .min(1, "Password is required")
        .max(72, "Password is too long")
});

module.exports = {
    registerSchema,
    loginSchema
};