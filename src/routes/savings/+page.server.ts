import type { PageServerLoad } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { investmentSchema } from "./(data)/schemas";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(investmentSchema)),
    };
};