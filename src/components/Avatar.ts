import type { AvatarProps } from "@mantine/core";
import type { ThemeComponent, ThemeComponentProps } from "../types";

const defaultProps: ThemeComponentProps<AvatarProps> = {
	color: "frost3",
	radius: "xl",
};

export const Avatar: ThemeComponent = {
	defaultProps,
};
