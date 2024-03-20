<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import CardStackPlus from 'svelte-radix/CardStackPlus.svelte';
	import { type DateValue } from '@internationalized/date';
	import { Button } from '$lib/components/ui/button';
	import { DatePicker } from '.';

	let startDate: DateValue | undefined = undefined;
	let endDate: DateValue | undefined = undefined;
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]}>
			Add
			<CardStackPlus class="ml-2 h-4 w-4" />
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>Add Investment</Sheet.Title>
			<Sheet.Description>Add investments here. Click save when you're done.</Sheet.Description>
		</Sheet.Header>
		<div class="grid gap-4 py-4">
			<div class="grid gap-4">
				<Label for="endDate">Start Date</Label>
				<DatePicker bind:value={startDate} />
			</div>
			<div class="grid gap-4">
				<Label for="endDate">End Date</Label>
				<DatePicker bind:value={endDate} />
			</div>
			<div class="grid gap-4">
				<Label for="invName">Investment Name</Label>
				<Input id="invName" placeholder="BCCB" />
			</div>
			<div class="grid gap-4">
				<Label for="invType">Investment Type</Label>
				<Input id="invType" placeholder="Investment Type" />
			</div>
			<div class="grid gap-4">
				<Label for="returnRate">Return Rate</Label>
				<Input id="returnRate" placeholder="12" />
			</div>
			<div class="grid gap-4">
				<Label for="returnType">Return Type</Label>
				<Input id="returnType" placeholder="Return Type" />
			</div>
			<div class="grid gap-4">
				<Label for="invAmount">Investment Amount</Label>
				<Input id="invAmount" placeholder="1000" />
			</div>
			<div class="grid gap-4">
				<Label for="returnAmount">Return Amount</Label>
				<Input id="returnAmount" placeholder="1200" />
			</div>
			<div class="grid gap-4">
				<Label for="name">Name</Label>
				<Input id="name" placeholder="Erson" />
			</div>
		</div>
		<Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} type="submit">Save</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
