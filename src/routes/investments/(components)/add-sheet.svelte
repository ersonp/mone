<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import CardStackPlus from 'svelte-radix/CardStackPlus.svelte';
	import { Button } from '$lib/components/ui/button';
	import { InvestmentsForm } from '.';
	import type { PageData } from '../$types.js';
	export let data: PageData;
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]}>
			Add
			<CardStackPlus class="ml-2 h-4 w-4" />
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right" class="overflow-y-auto">
		<Sheet.Header>
			<Sheet.Title>Add Investment</Sheet.Title>
			<Sheet.Description>Add investments here. Click save when you're done.</Sheet.Description>
		</Sheet.Header>
		<div class="py-4">
			<InvestmentsForm data={data.form} />
		</div>
	</Sheet.Content>
</Sheet.Root>
