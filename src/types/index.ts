import type { Tuple, MantineThemeOverride } from "@mantine/core";

export type NordKeys =
	| "PolarNight1"
	| "PolarNight2"
	| "PolarNight3"
	| "PolarNight4"
	| "SnowStorm1"
	| "SnowStorm2"
	| "SnowStorm3"
	| "Frost1"
	| "Frost2"
	| "Frost3"
	| "Frost4"
	| "AuroraRed"
	| "AuroraOrange"
	| "AuroraYellow"
	| "AuroraGreen"
	| "AuroraPurple";

export type MantineCustomColors =
	| "night1"
	| "night2"
	| "night3"
	| "night4"
	| "snow1"
	| "snow2"
	| "snow3"
	| "frost1"
	| "frost2"
	| "frost3"
	| "frost4"
	| "red"
	| "orange"
	| "yellow"
	| "green"
	| "purple";

export type Nord = Record<NordKeys, string>;

export type NordExtended = Record<NordKeys, Tuple<string, 10>>;

export type ThemeComponent = NonNullable<
	MantineThemeOverride["components"]
>[string];

export type ThemeComponentProps<T> = Partial<T>;
