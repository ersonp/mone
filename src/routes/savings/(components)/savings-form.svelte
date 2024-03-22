<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { investmentSchema, type InvestmentSchema } from '../(data)/schemas';
	import SuperDebug, { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import CalendarIcon from 'svelte-radix/Calendar.svelte';
	import { cn } from '$lib/utils.js';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import * as Form from '$lib/components/ui/form/index.js';
	// import { toast } from 'svelte-sonner';
	import { DatePicker } from '.';
	import {
		type DateValue,
		DateFormatter,
		getLocalTimeZone,
		parseDate,
		CalendarDate,
		today
	} from '@internationalized/date';
	export let data: SuperValidated<Infer<InvestmentSchema>>;

	const form = superForm(data, {
		validators: zodClient(investmentSchema),
		dataType: 'json'
	});

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});
	let placeholder: DateValue = today(getLocalTimeZone());
	const { form: formData, enhance } = form;
	let value: DateValue | undefined = undefined;
	let startDateValue: DateValue | undefined = undefined;
	let endDateValue: DateValue | undefined = undefined;
	$: value = $formData.start_date ? parseDate($formData.start_date) : undefined;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="start_date">
		<Form.Control let:attrs>
			<Form.Label>Start Date</Form.Label>
			<DatePicker attrs value={endDateValue} formValue={'start_date'} bind:formData={$formData} />
			<Form.Description>When did you start this investment?</Form.Description>
			<input hidden value={$formData.start_date} name={attrs.name} />
			<Form.FieldErrors />
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="end_date">
		<Form.Control let:attrs>
			<Form.Label>End Date</Form.Label>
			<DatePicker attrs value={endDateValue} formValue={'end_date'} bind:formData={$formData} />
			<Form.Description>When will this investment end?</Form.Description>
			<input hidden value={$formData.end_date} name={attrs.name} />
			<Form.FieldErrors />
		</Form.Control>
	</Form.Field>
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.Description>The name of the person this investment is on.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Submit</Form.Button>
	<SuperDebug data={$formData} />
</form>
