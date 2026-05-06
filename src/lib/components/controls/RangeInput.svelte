<script lang="ts">
	import { settings, type Settings } from '$lib/storage.svelte';

	type Props = {
		setting: keyof Settings;
		min?: number;
		max: number;
	};

	let { setting, min = 0, max }: Props = $props();
</script>

<div>
	<span class="inline-block w-22 text-right">{setting}</span>
	<input
		class="accent-lavender h-1 w-48 cursor-pointer appearance-none rounded-full bg-ctp-lavender/50"
		type="range"
		bind:value={settings.current[setting]}
		{min}
		{max}
		step="1"
	/>
	<span>{settings.current[setting]}{setting === 'hue' ? '°' : '%'}</span>
</div>
