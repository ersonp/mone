<script lang="ts">
	import CalendarIcon from 'svelte-radix/Calendar.svelte';
	import {
		type DateValue,
		DateFormatter,
		getLocalTimeZone,
		parseDate,
		CalendarDate,
		today
	} from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import ChevronLeft from 'svelte-radix/ChevronLeft.svelte';
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});
	export let formData: any;
	export let formValue: string;
	export let attrs: any;
	export let minDate = '';
	let value: DateValue | undefined;
	let minDateVal: DateValue | undefined;

	$: if (formData[minDate]) {
		minDateVal = parseDate(formData[minDate]);
	} else {
		minDateVal = new CalendarDate(1900, 1, 1);
	}

	// Initialize the year to the current year
	let currentYear = new Date().getFullYear();
	function changeYear(increment: number) {
		currentYear += increment;
		if (value) {
			const date = value.toDate(getLocalTimeZone());
			date.setFullYear(currentYear);
			value = new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
		} else {
			value = new CalendarDate(currentYear, 1, 1);
		}
	}

	$: value = formData[formValue] ? parseDate(formData[formValue]) : undefined;
</script>

<Popover.Root>
	<Popover.Trigger
		{...attrs}
		class={cn(
			buttonVariants({ variant: 'outline' }),
			'w-full justify-start pl-4 text-left font-normal',
			!value && 'text-muted-foreground'
		)}
	>
		{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
		<CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
	</Popover.Trigger>
	<Popover.Content class="w-auto p-0" side="top">
		<div class="flex items-center justify-between p-2">
			<Button
				variant="outline"
				size="icon"
				class="p-2"
				on:click={() => {
					changeYear(-1);
				}}
			>
				<ChevronLeft class="h-[1.2rem] w-[1.2rem] opacity-50 hover:opacity-100" />
			</Button>
			<div class="font-medium">{currentYear}</div>
			<Button
				variant="outline"
				size="icon"
				class="p-2"
				on:click={() => {
					changeYear(1);
				}}
			>
				<ChevronRight class="h-[1.2rem] w-[1.2rem] opacity-50 hover:opacity-100" />
			</Button>
		</div>
		<Calendar
			{value}
			minValue={minDateVal}
			calendarLabel="Date"
			initialFocus
			onValueChange={(v) => {
				if (v) {
					formData[formValue] = v.toString();
				} else {
					formData[formValue] = '';
				}
			}}
		/>
	</Popover.Content>
</Popover.Root>
