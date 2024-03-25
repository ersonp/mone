<script lang="ts">
	import { investmentSchema, type Investment } from '../(data)/schemas.js';
	import {
		DataTableNameCell,
		DataTableStatusCell,
		EditSheet,
		RenewSheet,
		DataTableCloseAlert,
		DataTableDeleteAlert
	} from '.';
	import { Button } from '$lib/components/ui/button';
	import CaretSort from 'svelte-radix/CaretSort.svelte';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as Drawer from '$lib/components/ui/drawer';
	import tableData from '../(data)/investments.json';
	import DataTable from '../(components)/data-table.svelte';

	export let expanded: Investment;
	export let expandLite: boolean;
	let historyTableData = tableData.slice(0, 2);

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
	{#if !expandLite}
		<div class="p-2">
			<Drawer.Root>
				<Drawer.Trigger asChild let:builder>
					<Button builders={[builder]} variant="outline">Inv History</Button>
				</Drawer.Trigger>
				<Drawer.Content>
					<div class="mx-auto w-full p-4">
						<Drawer.Header>
							<Drawer.Title>Inv History</Drawer.Title>
							<Drawer.Description>
								This section displays the history of investments that were previously renewed to
								form the current investment.
							</Drawer.Description>
						</Drawer.Header>
						<DataTable tableData={historyTableData} tableLite={true} />
					</div>
				</Drawer.Content>
			</Drawer.Root>
		</div>
		<div class="p-2">
			<Collapsible.Root class="space-y-2">
				<div class="flex items-center justify-between space-x-4 pr-4">
					<h4 class="text-sm text-muted-foreground">Actions</h4>
					<Collapsible.Trigger asChild let:builder>
						<Button builders={[builder]} variant="ghost" size="sm" class="w-9 p-0">
							<CaretSort class="h-4 w-4" />
							<span class="sr-only">Toggle</span>
						</Button>
					</Collapsible.Trigger>
				</div>
				<RenewSheet row={expanded} />
				<Collapsible.Content class="space-y-2">
					<EditSheet row={expanded} />
					<DataTableCloseAlert />
					<DataTableDeleteAlert />
				</Collapsible.Content>
			</Collapsible.Root>
		</div>
	{/if}
</div>
