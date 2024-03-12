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
    title: z.string(),
    label: z.string(),
    name: z.string(),
    inv_status: z.string(),
});

export type Task = z.infer<typeof taskSchema>;