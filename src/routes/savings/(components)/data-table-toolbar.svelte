<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { DataTableFacetedFilter, DataTableViewOptions } from '.';
	import type { Task } from '../(data)/schemas.js';
	import type { TableViewModel } from 'svelte-headless-table';
	import Button from '$lib/components/ui/button/button.svelte';
	import Cross2 from 'svelte-radix/Cross2.svelte';
	import { invTypes, statuses, names } from '../(data)/data.js';
	import type { Writable } from 'svelte/store';

	export let tableModel: TableViewModel<Task>;

	const { pluginStates } = tableModel;
	const {
		filterValue
	}: {
		filterValue: Writable<string>;
	} = pluginStates.filter;

	const {
		filterValues
	}: {
		filterValues: Writable<{
			invType: string[];
			status: string[];
			name: string[];
		}>;
	} = pluginStates.colFilter;

	$: showReset = Object.values({ ...$filterValues, $filterValue }).some((v) => v.length > 0);
</script>

<div class="flex flex-col space-y-2">
	<div class="flex flex-wrap">
		<div class="w-full md:w-1/2 lg:w-1/3 pr-1 pt-1">
			<Input placeholder="Filter..." class="h-8 " type="search" bind:value={$filterValue} />
		</div>
		<div class="pr-1 pt-1">
			<Button variant="outline" class="h-8">Button 1</Button>
		</div>
		<div class="pr-1 pt-1">
			<Button variant="outline" class="h-8">Button 2</Button>
		</div>
	</div>
	<div class="flex flex-wrap">
		<DataTableFacetedFilter
			bind:filterValues={$filterValues.invType}
			title="Inv Type"
			options={invTypes}
		/>
		<DataTableFacetedFilter
			bind:filterValues={$filterValues.status}
			title="Inv Status"
			options={statuses}
		/>
		<DataTableFacetedFilter bind:filterValues={$filterValues.name} title="Name" options={names} />
		{#if showReset}
			<div class="pt-1">
				<Button
					on:click={() => {
						$filterValue = '';
						$filterValues.invType = [];
						$filterValues.status = [];
						$filterValues.name = [];
					}}
					variant="ghost"
					class="h-8 px-2 lg:px-3"
				>
					Reset
					<Cross2 class="ml-2 h-4 w-4" />
				</Button>
			</div>
		{/if}
	</div>

	<DataTableViewOptions {tableModel} />
</div>
