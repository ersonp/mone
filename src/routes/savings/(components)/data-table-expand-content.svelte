<script lang="ts">
	import { investmentSchema, type Investment } from '../(data)/schemas.js';

	export let expanded: Investment;
	const data = investmentSchema.parse(expanded);
</script>

<div class="flex flex-col">
	<div class="flex">{data.created_at}</div>
	<div class="flex">{data.updated_at}</div>
	<div class="flex">{data.inv_type}</div>
	<div class="flex">{data.inv_status}</div>
	<div class="flex">{data.inv_name}</div>
</div>
