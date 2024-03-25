<script lang="ts">
	import CaretDown from 'svelte-radix/CaretDown.svelte';
	import CaretUp from 'svelte-radix/CaretUp.svelte';
	import { Button } from '$lib/components/ui/button';
	export let isExpanded;
</script>

<Button
	variant="outline"
	on:click={() => ($isExpanded = !$isExpanded)}
	aria-label="Toggle expanded"
	class="border-dashed flex h-8 w-8 p-0"
>
	{#if $isExpanded}
		<CaretUp class="h-4 w-4" />
	{:else}
		<CaretDown class="h-4 w-4" />
	{/if}
</Button>
