import z from "zod";

export const staffSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    codeName: z.string().min(1, { message: "Code name is required" }),
    idNo: z.string().min(1, { message: "ID no is required" }),
    phone: z.number().nullable(),
    birthday: z.date().nullable(),
    addressLine1: z.string().optional(),
    branchId: z.string({ invalid_type_error: "You must assign branch" }),
});
