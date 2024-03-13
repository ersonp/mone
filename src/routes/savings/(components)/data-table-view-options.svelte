<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import MixerHorizontal from 'svelte-radix/MixerHorizontal.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { Task } from '../(data)/schemas.js';
	import type { TableViewModel } from 'svelte-headless-table';

	export let tableModel: TableViewModel<Task>;
	const { pluginStates, flatColumns } = tableModel;
	const { hiddenColumnIds } = pluginStates.hide;

	let ids = [];
	let hideForId = {};

	const updateColumns = () => {
		if (window.innerWidth <= 768) {
			// for screens smaller or equal to 768px
			ids = ['invType', 'returnRate', 'returnType', 'invAmount', 'name', 'status']; // replace with your actual column IDs for larger screens
		} else {
			ids = ['invType']; // replace with your actual column IDs for small screens
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
