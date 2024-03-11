<script lang="ts">
	import { page } from '$app/stores';
	import ChevronLeftProps from 'svelte-radix/ChevronLeft.svelte';
	import ChevronRightProps from 'svelte-radix/ChevronRight.svelte';
	import { Button } from '$lib/components/ui/button';
	import SidebarTop from './sidebar-top.svelte';
	import SidebarBottom from './sidebar-bottom.svelte';
	let isOpen = true;

	$: isRoot = $page.url.pathname === '/';

	function toggleSidebar() {
		isOpen = !isOpen;
	}
</script>

{#if !isRoot}
	<aside class="{isOpen ? 'w-1/5' : undefined} min-h-screen bg-accent relative group">
		<div class="sm:hidden">
			<button on:click={toggleSidebar}>
				<!-- Replace with your hamburger icon -->
				<span>🍔</span>
			</button>
		</div>
		<nav class="top-0 py-8 px-2 w-full relative flex flex-col justify-between h-full">
			<div
				class=" top-1/2 -right-6 transform -translate-y-1/2 mx-4 hidden group-hover:flex absolute"
			>
				<Button on:click={toggleSidebar} variant="outline" size="icon" class="w-5">
					{#if isOpen}
						<ChevronLeftProps class="absolute h-[1.2rem] w-[1.2rem]" />
					{:else}
						<ChevronRightProps class="absolute h-[1.2rem] w-[1.2rem]" />
					{/if}
					<span class="sr-only">Toggle sideabar</span>
				</Button>
			</div>
			<SidebarTop {isOpen} />
			<SidebarBottom {isOpen} />
		</nav>
	</aside>
{/if}
