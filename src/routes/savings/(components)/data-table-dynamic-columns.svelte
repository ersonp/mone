<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import MixerHorizontal from 'svelte-radix/MixerHorizontal.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { Investment } from '../(data)/schemas.js';
	import type { TableViewModel } from 'svelte-headless-table';

	export let tableModel: TableViewModel<Investment>;
	const { pluginStates, flatColumns } = tableModel;
	const { hiddenColumnIds } = pluginStates.hide;

	let ids = [];
	let hideForId = {};

	const updateColumns = () => {
		if (window.innerWidth <= 768) {
			// md: '768px'
			ids = ['invType', 'returnRate', 'returnType', 'invAmount', 'name', 'status', 'actions'];
		} else if (window.innerWidth <= 1024) {
			// lg: '1024px'
			ids = ['invType', 'returnRate', 'returnType', 'invAmount', 'status'];
		} else if (window.innerWidth <= 1280) {
			ids = ['invType', 'returnRate', 'returnType'];
			// xl: '1280px'
		} else {
			// '2xl': '1536px'
			ids = ['invType'];
		}
		hideForId = Object.fromEntries(ids.map((id) => [id, true]));
		$hiddenColumnIds = Object.entries(hideForId)
			.filter(([, hide]) => hide)
			.map(([id]) => id);
	};

	onMount(() => {
		window.addEventListener('resize', updateColumns);
		updateColumns();
	});

	onDestroy(() => {
		window.removeEventListener('resize', updateColumns);
	});
</script>
