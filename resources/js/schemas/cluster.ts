import z from "zod";

export const clusterSchema = z.object({
    staffId: z.string({ invalid_type_error: "You must assign staff" }),
    branchId: z.string({ invalid_type_error: "You must assign branch" }),
    clusterCode: z.string().min(1, { message: "Cluster code is required" }),
    dateOfRelease: z.date({ message: "Date of release is required" }),
    dateOfFirstPayment: z.date({
        message: "Date of first payment is required",
    }),
    dateOfLastPayment: z.date({ message: "Date of last payment is required" }),
    loanTerm: z.string().min(1, { message: "Loan term is required" }),
});
