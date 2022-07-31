import { nord, nordExtended } from "./colors/nord";
import { dark } from "./colors/dark";
import { gray } from "./colors/gray";

import { Accordion } from "./components/Accordion";
import { ActionIcon } from "./components/ActionIcon";
import { Avatar } from "./components/Avatar";
import { Badge } from "./components/Badge";
import { Slider } from "./components/Slider";
import { Text } from "./components/Text";
import { Tooltip } from "./components/Tooltip";

import type { Tuple, MantineThemeOverride } from "@mantine/core";
import type { Nord, MantineCustomColors } from "./types";

export const theme: MantineThemeOverride = {
	respectReducedMotion: true,
	defaultRadius: "sm",
	white: "#FFFFFF",
	black: nord["PolarNight4"],
	colors: {
		night1: nordExtended["PolarNight1"],
		night2: nordExtended["PolarNight2"],
		night3: nordExtended["PolarNight3"],
		night4: nordExtended["PolarNight4"],
		snow1: nordExtended["SnowStorm1"],
		snow2: nordExtended["SnowStorm2"],
		snow3: nordExtended["SnowStorm3"],
		frost1: nordExtended["Frost1"],
		frost2: nordExtended["Frost2"],
		frost3: nordExtended["Frost3"],
		frost4: nordExtended["Frost4"],
		red: nordExtended["AuroraRed"],
		orange: nordExtended["AuroraOrange"],
		yellow: nordExtended["AuroraYellow"],
		green: nordExtended["AuroraGreen"],
		purple: nordExtended["AuroraPurple"],
		dark,
		gray,
	},
	primaryColor: "frost2",
	primaryShade: { light: 4, dark: 5 },
	defaultGradient: { deg: 30, from: nord["Frost4"], to: nord["Frost2"] },
	fontFamily:
		"'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
	lineHeight: 1.66,
	fontFamilyMonospace:
		"'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
	fontSizes: {
		xs: 11,
		sm: 13,
		md: 15,
		lg: 17,
		xl: 19,
	},
	headings: {
		fontFamily:
			"'Rubik', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
	},
	loader: "bars",
	components: {
		Accordion,
		ActionIcon,
		Avatar,
		Badge,
		Slider,
		Text,
		Tooltip,
	},
	other: {
		nord,
	},
};

export const colors = {
	nord,
	nordExtended,
	dark,
	gray,
}

declare module "@mantine/core" {
	export interface MantineThemeColorsOverride {
		colors: Record<MantineCustomColors | "dark" | "gray", Tuple<string, 10>>;
	}
}

declare module "@mantine/core" {
	export interface MantineThemeOther {
		nord: Nord;
	}
}
