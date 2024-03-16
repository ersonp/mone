<script lang="ts">
	import DotsHorizontal from 'svelte-radix/DotsHorizontal.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { invTypes } from '../(data)/data.js';
	import { investmentSchema, type Investment } from '../(data)/schemas.js';

	export let row: Investment;
	const data = investmentSchema.parse(row);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			variant="ghost"
			builders={[builder]}
			class="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
		>
			<DotsHorizontal class="h-4 w-4" />
			<span class="sr-only">Open menu</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-[160px]" align="end">
		<DropdownMenu.Item>Edit</DropdownMenu.Item>
		<DropdownMenu.Item>Make a copy</DropdownMenu.Item>
		<DropdownMenu.Item>Favorite</DropdownMenu.Item>
		<DropdownMenu.Separator />
		<DropdownMenu.Sub>
			<DropdownMenu.SubTrigger>Inv Types</DropdownMenu.SubTrigger>
			<DropdownMenu.SubContent>
				<DropdownMenu.RadioGroup value={data.inv_type}>
					{#each invTypes as invType}
						<DropdownMenu.RadioItem value={invType.value}>
							{invType.label}
						</DropdownMenu.RadioItem>
					{/each}
				</DropdownMenu.RadioGroup>
			</DropdownMenu.SubContent>
		</DropdownMenu.Sub>
		<DropdownMenu.Separator />
		<DropdownMenu.Item>
			Delete
			<DropdownMenu.Shortcut>⌘⌫</DropdownMenu.Shortcut>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
