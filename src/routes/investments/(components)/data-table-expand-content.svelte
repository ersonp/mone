<script lang="ts">
	import { investmentSchema, type Investment } from '../(data)/schemas.js';
	import { DataTableNameCell, DataTableStatusCell } from '.';
	import PlusCircled from 'svelte-radix/PlusCircled.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	export let expanded: Investment;
	const data = investmentSchema.parse(expanded);
	let cDate = new Date(data.created_at);
	const createdAt = cDate.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	let eDate = new Date(data.updated_at);
	const updatedAt = eDate.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<div class="grid grid-cols-3 gap-4 p-4 border rounded items-center justify-between">
	<div class="p-2 flex flex-col xl:hidden">
		<span class="text-sm text-muted-foreground">Return Rate</span>
		<span class="font-semibold leading-none tracking-tight">{data.return_rate} %</span>
	</div>
	<div class="p-2 flex flex-col xl:hidden">
		<span class="text-sm text-muted-foreground">Return Type</span>
		<span class="font-semibold leading-none tracking-tight">{data.return_type}</span>
	</div>
	<div class="p-2 flex flex-col lg:hidden">
		<span class="text-sm text-muted-foreground">Inv Amount</span>
		<span class="font-semibold leading-none tracking-tight">{data.inv_amount}</span>
	</div>
	<div class="p-2 flex flex-col lg:hidden">
		<span class="text-sm text-muted-foreground">Inv Status</span>
		<span class="font-semibold leading-none tracking-tight">
			<DataTableStatusCell value={data.inv_status} />
		</span>
	</div>
	<div class="p-2 flex flex-col md:hidden">
		<span class="text-sm text-muted-foreground">Name</span>
		<span class="font-semibold leading-none tracking-tight">
			<DataTableNameCell value={data.name} />
		</span>
	</div>
	<div class="p-2 flex flex-col">
		<span class="text-sm text-muted-foreground">Created At</span>
		<span class="font-semibold leading-none tracking-tight">{createdAt}</span>
	</div>
	<div class="p-2 flex flex-col">
		<span class="text-sm text-muted-foreground">Updated At</span>
		<span class="font-semibold leading-none tracking-tight">{updatedAt}</span>
	</div>
	<div class="p-2">
		<Button variant="outline">Open</Button>
	</div>
</div>