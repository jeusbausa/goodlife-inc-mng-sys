import z from "zod";

export const clientSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "First name is required" }),
    middleName: z.string(),
    birthday: z.date().nullable(),
    phone: z.number().nullable(),
    addressLine1: z.string().optional(),
});
