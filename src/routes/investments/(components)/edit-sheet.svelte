<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { InvestmentsForm } from '.';
	import { investmentSchema, type Investment } from '../(data)/schemas.js';
	import { superValidate, type SuperValidated } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	export let row: Investment;

	let validatedData: SuperValidated<Investment>;

	const validateData = async () => {
		validatedData = await superValidate(row, zod(investmentSchema));
	};
	$: validateData();
</script>

<Sheet.Root>
	<Sheet.Trigger>Edit</Sheet.Trigger>
	<Sheet.Content side="right" class="overflow-y-auto">
		<Sheet.Header>
			<Sheet.Title>Edit Investment</Sheet.Title>
			<Sheet.Description>Edit investments here. Click save when you're done.</Sheet.Description>
		</Sheet.Header>
		<div class="py-4">
			<InvestmentsForm data={validatedData} />
		</div>
	</Sheet.Content>
</Sheet.Root>
