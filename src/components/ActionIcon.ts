import type { ActionIconProps } from "@mantine/core";
import type { ThemeComponent, ThemeComponentProps } from "../types";

const defaultProps: ThemeComponentProps<ActionIconProps> = {
	color: "frost2",
};

export const ActionIcon: ThemeComponent = {
	defaultProps,
};
