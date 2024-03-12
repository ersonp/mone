<script lang="ts">
	import Globe from 'svelte-radix/Globe.svelte';
	import FileText from 'svelte-radix/FileText.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { goto } from '$app/navigation';

	let selectedBackend = 'api';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Choose Backend</Card.Title>
		<Card.Description>Choose which type of backend you want to use.</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-6">
		<RadioGroup.Root bind:value={selectedBackend} class="grid grid-cols-2 gap-4">
			<Label
				for="api"
				class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
			>
				<RadioGroup.Item value="api" id="api" class="sr-only" aria-label="API" />
				<Globe class="mb-3 h-6 w-6" />
				API
			</Label>
			<Label
				for="local"
				class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
			>
				<RadioGroup.Item value="local" id="local" class="sr-only" aria-label="Local Storage" />
				<FileText class="mb-3 h-6 w-6" />
				Local Storage
			</Label>
		</RadioGroup.Root>
		{#if selectedBackend === 'api'}
			<div class="grid gap-2">
				<Label for="name">URL</Label>
				<Input id="name" placeholder="http://192.168.0.2" />
			</div>
		{/if}
	</Card.Content>
	<Card.Footer>
		<Button class="w-full" on:click={() => goto('/savings')}>Continue</Button>
	</Card.Footer>
</Card.Root>
