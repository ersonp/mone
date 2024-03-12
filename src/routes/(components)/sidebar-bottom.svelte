<script lang="ts">
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';
	import Avatar from 'svelte-radix/Avatar.svelte';
	import Gear from 'svelte-radix/Gear.svelte';
	import { Button } from '$lib/components/ui/button';
	import { toggleMode } from 'mode-watcher';

	export let isOpen: boolean;
</script>

<ul class="{isOpen ? undefined : 'md:flex-col'} flex overflow-hidden px-2 flex-row justify-between">
	<div class="{isOpen ? undefined : 'md:block'} flex flex-row">
		<li class="flex items-center justify-center p-1">
			<Button on:click={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</li>
		<li class="flex items-center justify-center p-1">
			<Button variant="outline" size="icon">
				<Gear class="h-[1.2rem] w-[1.2rem]" />
				<span class="sr-only">Settings</span>
			</Button>
		</li>
	</div>
	<li class="flex items-center justify-center p-1">
		<Button variant="outline" size="icon">
			<Avatar class="h-[1.2rem] w-[1.2rem]" />
			<span class="sr-only">Profile</span>
		</Button>
	</li>
</ul>
