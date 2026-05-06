import { PersistentState } from '@friendofsvelte/state';

export type Settings = {
	font: 'sans-serif' | 'courier-prime';
	hue: number;
	saturation: number;
	enablePRs: boolean;
	enableAvatars: boolean;
	enableTags: boolean;
	enableFlags: boolean;
	enableTeamColors: boolean;
	enableSinglePOV: boolean;
	enablePOVGuide: boolean;
};

export type Player = {
	name: string;
	avatarURL: string;
	tag: string;
	flag: string;
	score: number;
	pr: string;
};

export type Overlay = {
	bestOf: number;
	leftPlayer: Player;
	rightPlayer: Player;
	map: string;
	stage: string;
};

export type Items = {
	names: Array<string>;
	avatarURLs: Array<string>;
	tags: Array<string>;
	flags: Array<string>;
	maps: Array<string>;
	stages: Array<string>;
};

export const defaultStages = [
	'Round 1',
	'Round 2',
	'Quarterfinals',
	'Semifinals',
	'Finals',
	'Grand Finals',
	"Loser's Quarters",
	"Loser's Semis",
	"Loser's Finals"
];

// overlay settings
export const settings = new PersistentState('settings', {
	font: 'sans-serif',
	hue: 0,
	saturation: 100,
	enablePRs: false,
	enableAvatars: false,
	enableTags: false,
	enableFlags: true,
	enableTeamColors: false,
	enableSinglePOV: false,
	enablePOVGuide: false
} as Settings);

// overlay state
export const overlay = new PersistentState('overlay', {
	bestOf: 3,
	leftPlayer: { name: '', avatarURL: '', tag: '', flag: '', score: 0, pr: '' },
	rightPlayer: { name: '', avatarURL: '', tag: '', flag: '', score: 0, pr: '' },
	map: '',
	stage: ''
} as Overlay);

// overlay items
export const items = new PersistentState('items', {
	names: [],
	avatarURLs: [],
	tags: [],
	flags: [],
	maps: [],
	stages: defaultStages
} as Items);
