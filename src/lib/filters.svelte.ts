import { settings } from './storage.svelte';

export function getFiltersStyle() {
	return `hue-rotate(${settings.current.hue}deg) saturate(${settings.current.saturation}%)`;
}
