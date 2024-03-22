import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const investmentSchema = z.object({
    id: z.object({
        tb: z.string(),
        id: z.object({
            String: z.string(),
        }),
    }),
    inv_name: z.string(),
    inv_type: z.string(),
    return_rate: z.number(),
    return_type: z.string(),
    inv_amount: z.number(),
    return_amount: z.number(),
    name: z.string().min(2).max(50),
    inv_status: z.string(),
    start_date: z.string().refine((v) => v, { message: "Start date is required." }),
    end_date: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
});

export type Investment = z.infer<typeof investmentSchema>;
export type InvestmentSchema = typeof investmentSchema;