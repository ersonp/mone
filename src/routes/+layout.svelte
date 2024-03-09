<script lang="ts">
	import '../app.pcss';
	import '../app.postcss';
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { appWindow } from '@tauri-apps/api/window';
</script>

<ModeWatcher />

<!-- dragable titlebar for mac -->
<div>
	<div class="absolute top-0 h-8 w-full" data-tauri-drag-region />
</div>

<div class="container h-full w-full flex flex-col justify-center items-center">
	<nav class="w-full flex justify-between pt-6">
		<div class="ml-auto">
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
	<main class="flex-grow flex justify-center items-center">
		<slot />
	</main>
</div>
