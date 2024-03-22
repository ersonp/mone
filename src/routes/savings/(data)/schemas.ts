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
    inv_name: z.string().min(2).max(50),
    inv_type: z.string().refine((v) => v, { message: "Inv Type is required." }),
    return_rate: z.number().refine(value => value !== 0, { message: "Return rate should not be zero." }),
    return_type: z.string().refine((v) => v, { message: "Return Type is required." }),
    inv_amount: z.number().refine(value => value !== 0, { message: "Inv amount should not be zero." }),
    return_amount: z.number().refine(value => value !== 0, { message: "Return amount should not be zero." }),
    name: z.string().refine((v) => v, { message: "Name is required." }),
    inv_status: z.string(),
    start_date: z.string().refine((v) => v, { message: "Start date is required." }),
    end_date: z.string().refine((v) => v, { message: "End date is required." }),
    created_at: z.string(),
    updated_at: z.string(),
});

export type Investment = z.infer<typeof investmentSchema>;
export type InvestmentSchema = typeof investmentSchema;