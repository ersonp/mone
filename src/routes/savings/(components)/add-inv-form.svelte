<script lang="ts">
	import { zodClient } from 'sveltekit-superforms/adapters';
	import SuperDebug, { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { Input } from '$lib/components/ui/input';
	import * as Form from '$lib/components/ui/form';
	import Dropdown from '../../(components)/dropdown.svelte';
	import { investmentSchema, type InvestmentSchema } from '../(data)/schemas';
	import { invTypes, returnTypes, names } from '../(data)/data.js';
	import { DatePicker } from '.';

	export let data: SuperValidated<Infer<InvestmentSchema>>;

	const form = superForm(data, {
		validators: zodClient(investmentSchema),
		dataType: 'json'
	});

	const { form: formData, enhance } = form;

	$: $formData.return_rate = Number($formData.return_rate);
	$: $formData.inv_amount = Number($formData.inv_amount);
	$: $formData.return_amount = Number($formData.return_amount);
</script>

<form method="POST" use:enhance>
	<!-- Start Date -->
	<Form.Field {form} name="start_date">
		<Form.Control let:attrs>
			<Form.Label>Start Date</Form.Label>
			<DatePicker attrs formValue={'start_date'} bind:formData={$formData} />
			<input hidden value={$formData.start_date} name={attrs.name} />
		</Form.Control>
		<Form.Description>When did you start this investment?</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<!-- End Date -->
	<Form.Field {form} name="end_date">
		<Form.Control let:attrs>
			<Form.Label>End Date</Form.Label>
			<DatePicker attrs formValue={'end_date'} bind:formData={$formData} minDate={'start_date'} />
			<input hidden value={$formData.end_date} name={attrs.name} />
		</Form.Control>
		<Form.Description>When will this investment end?</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<!-- Inv Name -->
	<Form.Field {form} name="inv_name">
		<Form.Control let:attrs>
			<Form.Label>Inv Name</Form.Label>
			<Input {...attrs} bind:value={$formData.inv_name} />
		</Form.Control>
		<Form.Description>The name of the investment.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<!-- Investment Type -->
	<Form.Field {form} name="inv_type">
		<Form.Control let:attrs>
			<Form.Label>Investment Type</Form.Label>
			<Dropdown bind:formData={$formData} options={invTypes} formValue="inv_type" {attrs} />
			<input hidden bind:value={$formData.inv_type} name={attrs.name} />
		</Form.Control>
		<Form.Description>The type of investment this is.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<!-- Return Type -->
	<Form.Field {form} name="return_type">
		<Form.Control let:attrs>
			<Form.Label>Return Type</Form.Label>
			<Dropdown bind:formData={$formData} options={returnTypes} formValue="return_type" {attrs} />
			<input hidden bind:value={$formData.return_type} name={attrs.name} />
		</Form.Control>
		<Form.Description>The type of return this investment will have.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<!-- Return Rate -->
	<Form.Field {form} name="return_rate">
		<Form.Control let:attrs>
			<Form.Label>Return Rate</Form.Label>
			<Input {...attrs} bind:value={$formData.return_rate} type="number" />
		</Form.Control>
		<Form.Description>The rate of return for this investment.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<!-- Inv Amount -->
	<Form.Field {form} name="inv_amount">
		<Form.Control let:attrs>
			<Form.Label>Inv Amount</Form.Label>
			<Input {...attrs} bind:value={$formData.inv_amount} type="number" />
		</Form.Control>
		<Form.Description>The amount of money invested.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<!-- Return Amount -->
	<Form.Field {form} name="return_amount">
		<Form.Control let:attrs>
			<Form.Label>Return Amount</Form.Label>
			<Input {...attrs} bind:value={$formData.return_amount} type="number" />
		</Form.Control>
		<Form.Description>The amount of promised return.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<!-- Name -->
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Dropdown bind:formData={$formData} options={names} formValue="name" {attrs} />
			<input hidden bind:value={$formData.name} name={attrs.name} />
		</Form.Control>
		<Form.Description>The name of the person this investment is on.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<div class="pt-2">
		<Form.Button>Submit</Form.Button>
	</div>
	<SuperDebug data={$formData} />
</form>
