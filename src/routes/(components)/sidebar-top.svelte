<script lang="ts">
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import PieChart from 'svelte-radix/PieChart.svelte';
	import SketchLogo from 'svelte-radix/SketchLogo.svelte';
	import Input from 'svelte-radix/Input.svelte';

	export let isOpen: boolean;
</script>

<ul class="flex flex-col overflow-hidden space-y-2 px-2">
	<li
		class="{isOpen
			? undefined
			: 'items-center justify-center'} flex p-2 hover:bg-primary-foreground hover:rounded {$page.url
			.pathname === '/savings'
			? 'bg-primary-foreground rounded'
			: undefined}"
	>
		<a href="/savings" class="flex">
			<SketchLogo />
			<span class={isOpen ? 'pl-4' : 'hidden'}> Savings </span>
		</a>
	</li>
	<li
		class="{isOpen
			? undefined
			: 'items-center justify-center'} flex p-2 hover:bg-primary-foreground hover:rounded {$page.url
			.pathname === '/accounts'
			? 'bg-primary-foreground rounded'
			: undefined}"
	>
		<a href="/accounts" class="flex">
			<Input />
			<span class={isOpen ? 'pl-4' : 'hidden'}> Accounts </span>
		</a>
	</li>
	<li
		class="{isOpen
			? undefined
			: 'items-center justify-center'} flex p-2 hover:bg-primary-foreground hover:rounded {$page.url
			.pathname === '/insights'
			? 'bg-primary-foreground rounded'
			: undefined}"
	>
		<a href="/insights" class="flex">
			<PieChart />
			<span class={isOpen ? 'pl-4' : 'hidden'}> Insights </span>
		</a>
	</li>
</ul>
