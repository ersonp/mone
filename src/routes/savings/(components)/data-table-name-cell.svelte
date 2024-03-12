<script lang="ts">
	import { names } from '../(data)/data.js';
	export let value: string;
	const name = names.find((name) => name.value === value);
	const Icon = name?.icon;
</script>

{#if name}
	<div class="flex items-center">
		{#if Icon}
			<Icon class="mr-2 h-4 w-4 text-muted-foreground" />
		{/if}
		<span>{name.label}</span>
	</div>
{/if}
