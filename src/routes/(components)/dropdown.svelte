<script lang="ts">
	import * as Select from '$lib/components/ui/select';

	export let formData: any;
	export let options: any;
	export let formValue: string;
	export let attrs: any;

	$: selectedType = formData[formValue]
		? {
				label: formData[formValue],
				value: formData[formValue]
			}
		: undefined;
</script>

<Select.Root
	selected={selectedType}
	onSelectedChange={(v) => {
		v && (formData[formValue] = v.value);
	}}
>
	<Select.Trigger {...attrs}>
		<Select.Value />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			{#each options as option}
				<Select.Item value={option.value} label={option.label}>
					{option.label}
				</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
	<Select.Input name={formValue} />
</Select.Root>
