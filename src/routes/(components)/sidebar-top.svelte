<script lang="ts">
	import { page } from '$app/stores';
	import PieChart from 'svelte-radix/PieChart.svelte';
	import SketchLogo from 'svelte-radix/SketchLogo.svelte';
	import Transactions from '$lib/icons/transactions.svelte';
	import Savings from '$lib/icons/savings.svelte';
	import Input from 'svelte-radix/Input.svelte';

	export let isOpen: boolean;
</script>

<ul class="flex flex-col overflow-hidden space-y-2 px-3">
	<a href="/savings">
		<li
			class="{isOpen
				? undefined
				: 'md:items-center md:justify-center'} flex p-2 hover:bg-primary hover:text-secondary hover:rounded {$page
				.url.pathname === '/savings'
				? 'bg-primary text-secondary rounded '
				: undefined}"
		>
			<Savings />
			<span class="{isOpen ? undefined : 'md:hidden'} pl-4"> Savings </span>
		</li>
	</a>
	<a href="/accounts">
		<li
			class="{isOpen
				? undefined
				: 'md:items-center md:justify-center'} flex p-2 hover:bg-primary hover:text-secondary hover:rounded {$page
				.url.pathname === '/accounts'
				? 'bg-primary text-secondary rounded '
				: undefined}"
		>
			<Transactions />
			<span class="{isOpen ? undefined : 'md:hidden'} pl-4"> Accounts </span>
		</li>
	</a>
	<a href="/insights">
		<li
			class="{isOpen
				? undefined
				: 'md:items-center md:justify-center'} flex p-2 hover:bg-primary hover:text-secondary hover:rounded {$page
				.url.pathname === '/insights'
				? 'bg-primary text-secondary rounded'
				: undefined}"
		>
			<PieChart />
			<span class="{isOpen ? undefined : 'md:hidden'} pl-4"> Insights </span>
		</li>
	</a>
</ul>
