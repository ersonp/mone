<script lang="ts">
	import type { DataBodyRow } from 'svelte-headless-table';
	import { taskSchema, type Task } from '../(data)/schemas.js';
	import type { AnyPlugins } from 'svelte-headless-table/plugins';

	// export let row: DataBodyRow<Task, AnyPlugins>;
	export let expanded: Task;
	const task = taskSchema.parse(expanded);
</script>

<div class="flex flex-col">
	<div class="flex">{task.created_at}</div>
	<div class="flex">{task.updated_at}</div>
	<div class="flex">{task.inv_type}</div>
	<div class="flex">{task.inv_status}</div>
	<div class="flex">{task.inv_name}</div>
</div>
