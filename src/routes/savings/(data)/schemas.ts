import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
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
    name: z.string(),
    inv_status: z.string(),
    start_date: z.string(),
    end_date: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
});

export type Task = z.infer<typeof taskSchema>;