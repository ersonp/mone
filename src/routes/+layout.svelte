<script lang="ts">
	import '../app.pcss';
	import '../app.postcss';
	import { ModeWatcher } from 'mode-watcher';
	import Sidebar from './(components)/sidebar.svelte';
</script>

<ModeWatcher />

<!-- dragable titlebar for mac -->
<div>
	<div class="absolute top-0 h-8 w-full z-50" data-tauri-drag-region />
</div>

<div class="flex flex-col md:flex-row w-full h-full">
	<Sidebar />
	<div class="w-full h-auto text-lg flex-grow z-49">
		<slot />
	</div>
</div>
