import type { BadgeProps } from "@mantine/core";
import type { ThemeComponent, ThemeComponentProps } from "../types";

const defaultProps: ThemeComponentProps<BadgeProps> = {
	variant: "filled",
};

export const Badge: ThemeComponent = {
	defaultProps,
};
