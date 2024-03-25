<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { InvestmentsForm } from '.';
	import { investmentSchema, type Investment } from '../(data)/schemas.js';
	import { superValidate, type SuperValidated } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	export let row: Investment;

	let renewRow = JSON.parse(JSON.stringify(row));
	renewRow.id = '';
	renewRow.created_at = '';
	renewRow.updated_at = '';
	renewRow.start_date = row.end_date;
	renewRow.end_date = '';
	renewRow.return_rate = 0;
	renewRow.inv_amount = row.return_amount;
	renewRow.return_amount = 0;
	renewRow.inv_status = 'Renewed';

	let validatedData: SuperValidated<Investment>;

	const validateData = async () => {
		validatedData = await superValidate(renewRow, zod(investmentSchema));
	};
	$: validateData();
</script>

<Sheet.Root>
	<Sheet.Trigger
		class="text-left rounded-md border px-4 py-3 font-semibold leading-none tracking-tight w-full"
	>
		Renew
	</Sheet.Trigger>
	<Sheet.Content side="right" class="overflow-y-auto">
		<Sheet.Header>
			<Sheet.Title>Renew Investment</Sheet.Title>
			<Sheet.Description>Renew investments here. Click save when you're done.</Sheet.Description>
		</Sheet.Header>
		<div class="py-4">
			<InvestmentsForm data={validatedData} />
		</div>
	</Sheet.Content>
</Sheet.Root>
