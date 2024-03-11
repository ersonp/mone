<script lang="ts">
	import { page } from '$app/stores';
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';
	import ChevronLeftProps from 'svelte-radix/ChevronLeft.svelte';
	import ChevronRightProps from 'svelte-radix/ChevronRight.svelte';
	import Avatar from 'svelte-radix/Avatar.svelte';
	import Gear from 'svelte-radix/Gear.svelte';
	import PieChart from 'svelte-radix/PieChart.svelte';
	import SketchLogo from 'svelte-radix/SketchLogo.svelte';
	import Input from 'svelte-radix/Input.svelte';
	import { Button } from '$lib/components/ui/button';
	import { toggleMode } from 'mode-watcher';
	let isOpen = true;

	$: isRoot = $page.url.pathname === '/';

	function toggleSidebar() {
		isOpen = !isOpen;
	}
</script>

{#if !isRoot}
	<aside class="{isOpen ? 'w-1/5' : undefined} min-h-screen bg-accent relative group">
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
			<ul class="flex flex-col overflow-hidden space-y-2 px-2">
				<li
					class="{isOpen
						? undefined
						: 'items-center justify-center'} flex p-2 hover:bg-primary-foreground hover:rounded {$page
						.url.pathname === '/investments'
						? 'bg-primary-foreground rounded'
						: undefined}"
				>
					<SketchLogo />
					<span class={isOpen ? 'pl-4' : 'hidden'}> Savings </span>
				</li>
				<li
					class="{isOpen
						? undefined
						: 'items-center justify-center'} flex p-2 hover:bg-primary-foreground hover:rounded {$page
						.url.pathname === '/accounts'
						? 'bg-primary-foreground rounded'
						: undefined}"
				>
					<Input />
					<span class={isOpen ? 'pl-4' : 'hidden'}> Accounts </span>
				</li>
				<li
					class="{isOpen
						? undefined
						: 'items-center justify-center'} flex p-2 hover:bg-primary-foreground hover:rounded {$page
						.url.pathname === '/insights'
						? 'bg-primary-foreground rounded'
						: undefined}"
				>
					<PieChart />
					<span class={isOpen ? 'pl-4' : 'hidden'}> Insights </span>
				</li>
			</ul>
			<ul
				class="{isOpen
					? 'flex-row space-x-2 justify-between'
					: 'flex-col space-y-2'} flex overflow-hidden px-2"
			>
				<div class={isOpen ? 'flex flex-row space-x-2' : 'space-y-2'}>
					<li class="flex items-center justify-center">
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
					<li class="flex items-center justify-center">
						<Button variant="outline" size="icon">
							<Gear class="h-[1.2rem] w-[1.2rem]" />
							<span class="sr-only">Settings</span>
						</Button>
					</li>
				</div>
				<li class="flex items-center justify-center">
					<Button variant="outline" size="icon">
						<Avatar class="h-[1.2rem] w-[1.2rem]" />
						<span class="sr-only">Profile</span>
					</Button>
				</li>
			</ul>
		</nav>
	</aside>
{/if}
