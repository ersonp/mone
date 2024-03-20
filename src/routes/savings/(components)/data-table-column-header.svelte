<script lang="ts">
	import CaretDown from 'svelte-radix/CaretDown.svelte';
	import CaretUp from 'svelte-radix/CaretUp.svelte';
	import CaretSort from 'svelte-radix/CaretSort.svelte';
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button';

	let className: string | undefined | null = undefined;
	export { className as class };
	export let props: {
		select: never;
		sort: {
			order: 'desc' | 'asc' | undefined;
			toggle: (event: Event) => void;
			clear: () => void;
			disabled: boolean;
		};
		filter: never;
	};

	function handleSort(e: Event) {
		if (props.sort.order === 'desc') {
			props.sort.clear();
		} else {
			props.sort.toggle(e);
		}
	}
</script>

{#if !props.sort.disabled}
	<div class={cn('flex items-center', className)}>
		<Button variant="ghost" on:click={handleSort} class="-ml-3 h-8 data-[state=open]:bg-accent">
			<slot />
			{#if props.sort.order === 'desc'}
				<CaretDown class="ml-2 h-4 w-4" />
			{:else if props.sort.order === 'asc'}
				<CaretUp class="ml-2 h-4 w-4" />
			{:else}
				<CaretSort class="ml-2 h-4 w-4" />
			{/if}
		</Button>
	</div>
{:else}
	<slot />
{/if}
