import type { AccordionProps } from "@mantine/core";
import type { ThemeComponent, ThemeComponentProps } from "../types";

const defaultProps: ThemeComponentProps<AccordionProps> = {
	variant: "contained",
	chevronPosition: "left",
};

export const Accordion: ThemeComponent = {
	defaultProps,
};
