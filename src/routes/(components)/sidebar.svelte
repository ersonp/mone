<script lang="ts">
	import { page } from '$app/stores';
	import ChevronLeftProps from 'svelte-radix/ChevronLeft.svelte';
	import ChevronRightProps from 'svelte-radix/ChevronRight.svelte';
	import HamburgerMenu from 'svelte-radix/HamburgerMenu.svelte';
	import { Button } from '$lib/components/ui/button';
	import SidebarTop from './sidebar-top.svelte';
	import SidebarBottom from './sidebar-bottom.svelte';
	import * as Collapsible from '$lib/components/ui/collapsible';
	let isOpen = true;

	$: isRoot = $page.url.pathname === '/';

	function toggleSidebar() {
		isOpen = !isOpen;
	}
</script>

{#if !isRoot}
	<Collapsible.Root class="space-y-2 md:hidden p-5">
		<div class="flex items-center justify-between space-x-4">
			<Collapsible.Trigger asChild let:builder>
				<Button builders={[builder]} variant="ghost" size="sm" class="w-9 p-0">
					<HamburgerMenu />
					<span class="sr-only">Toggle</span>
				</Button>
			</Collapsible.Trigger>
		</div>
		<Collapsible.Content class="space-y-2">
			<div class="rounded-md border px-4 py-3 font-mono text-sm">
				<SidebarTop {isOpen} />
			</div>
			<div class="rounded-md border px-4 py-3 font-mono text-sm">
				<SidebarBottom {isOpen} />
			</div>
		</Collapsible.Content>
	</Collapsible.Root>

	<aside
		class="{isOpen ? 'w-1/5' : undefined} hidden md:block min-h-screen relative group border-r"
	>
		<nav class="top-0 pt-8 pb-5 px-2 w-full relative flex flex-col justify-between h-full">
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
