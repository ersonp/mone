<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	export let endDate: string;
	export let startDate: string;
</script>

<div class="flex flex-col space-y-2">
	<span>{startDate}</span>
	<hr class="border-t my-2" />
	<span>{endDate}</span>
</div>
