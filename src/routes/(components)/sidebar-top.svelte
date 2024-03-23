<script lang="ts">
	import { page } from '$app/stores';
	import PieChart from 'svelte-radix/PieChart.svelte';
	import Investments from '$lib/icons/investments.svelte';
	import { HandCoins } from 'lucide-svelte';

	export let isOpen: boolean;
</script>

<ul class="flex flex-col overflow-hidden space-y-2 px-3">
	<a href="/investments">
		<li
			class="{isOpen
				? undefined
				: 'md:items-center md:justify-center'} flex p-2 hover:bg-primary hover:text-secondary hover:rounded {$page
				.url.pathname === '/investments'
				? 'bg-primary text-secondary rounded '
				: undefined}"
		>
			<Investments />
			<span class="{isOpen ? undefined : 'md:hidden'} pl-4"> Investments </span>
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
			<HandCoins />
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
