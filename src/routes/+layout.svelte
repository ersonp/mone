<script lang="ts">
	import '../app.pcss';
	import '../app.postcss';
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { appWindow } from '@tauri-apps/api/window';
	import Sidebar from './(components)/sidebar.svelte';
	let isMenuOpen = false; // state for burger menu
</script>

<ModeWatcher />

<!-- dragable titlebar for mac -->
<div>
	<div class="absolute top-0 h-8 w-full z-50" data-tauri-drag-region />
</div>

<div class="flex flex-row w-full h-full">
	<Sidebar />
	<div class="w-full h-auto text-lg flex-grow z-49">
		<slot />
	</div>
</div>
