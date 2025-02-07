import z from "zod";

export const branchSchema = z.object({
    name: z.string().min(1, { message: "Branch name is required" }),
});
