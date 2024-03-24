<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger
		class="text-left bg-destructive text-secondary dark:text-primary rounded-md border border-destructive px-4 py-3 font-semibold leading-none tracking-tight w-full"
	>
		Delete
	</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
			<AlertDialog.Description>
				This action cannot be undone. This will permanently delete this investment.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action class="bg-destructive text-secondary dark:text-primary">
				Continue
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
