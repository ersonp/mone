<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { invTypes } from '../(data)/data.js';

	export let value: string;
	export let labelValue: string;
	const label = invTypes.find((label) => label.value === labelValue);
</script>

<div class="flex space-x-2">
	{#if label}
		<Badge variant="outline">{label.label}</Badge>
	{/if}
	<span class="max-w-[500px] truncate font-medium">
		{value}
	</span>
</div>
