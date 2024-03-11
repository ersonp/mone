<script lang="ts">
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';
	import ChevronLeftProps from 'svelte-radix/ChevronLeft.svelte';
	import ChevronRightProps from 'svelte-radix/ChevronRight.svelte';
	import { Button } from '$lib/components/ui/button';
	import { toggleMode } from 'mode-watcher';
	let isOpen = true;

	function toggleSidebar() {
		isOpen = !isOpen;
	}
</script>

<aside class="{isOpen ? 'w-1/5' : ''} min-h-screen bg-accent relative group">
	<div class="top-0 pt-12 px-2 w-full h-full relative">
		<div class=" top-1/2 -right-6 transform -translate-y-1/2 mx-4 hidden group-hover:flex absolute">
			<Button on:click={toggleSidebar} variant="outline" size="icon" class="w-5">
				{#if isOpen}
					<ChevronLeftProps class="absolute h-[1.2rem] w-[1.2rem]" />
				{:else}
					<ChevronRightProps class="absolute h-[1.2rem] w-[1.2rem]" />
				{/if}
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
		<nav>
			<ul class="flex flex-col overflow-hidden space-y-2 px-2">
				<li class="hover:text-gray-200 h-8">
					<a href="#" class="flex items-center h-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 mr-1 inline-block"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
						<span class={isOpen ? '' : 'hidden'}> Home </span>
					</a>
				</li>
				<li class="hover:text-gray-200 h-8">
					<a href="#" class="flex items-center h-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 mr-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
							/>
						</svg>
						<span class={isOpen ? '' : 'hidden'}> Learn </span>
					</a>
				</li>
				<li class="hover:text-gray-200 h-8">
					<a href="#" class="flex items-center h-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 mr-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						<span class={isOpen ? '' : 'hidden'}> About </span>
					</a>
				</li>
				<li class="flex items-center">
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
			</ul>
		</nav>
	</div>
</aside>
