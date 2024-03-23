<script lang="ts">
	import DataTable from './(components)/data-table.svelte';
	import tableData from './(data)/investments.json';
	import type { PageData } from './$types.js';
	export let data: PageData;
</script>

<div class="h-screen flex-1 flex-col space-y-8 p-5 overflow-y-auto">
	<div class="flex items-center justify-between space-y-2">
		<div>
			<h2 class="text-2xl font-bold tracking-tight">Welcome back!</h2>
			<p class="text-muted-foreground">Here's a list of your investments for this month!</p>
		</div>
	</div>
	<DataTable {tableData} {data} />
	<div class="overflow-y-auto p-2"></div>
</div>
