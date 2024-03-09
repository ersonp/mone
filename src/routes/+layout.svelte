<script lang="ts">
	import '../app.pcss';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
</script>

<ModeWatcher />

<div class="container h-full mx-auto flex flex-col justify-center items-center">
	<nav class="w-full flex justify-between items-center p-4">
		<div class="text-2xl font-bold">Mone</div>
		<div>
			<Button on:click={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</nav>
	<div class="flex-grow flex justify-center items-center">
		<slot />
	</div>
</div>
