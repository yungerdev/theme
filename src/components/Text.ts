import { nord } from "../colors/nord";

import type { TextStylesParams } from "@mantine/core";
import type { ThemeComponent } from "../types";

export const Text: ThemeComponent = {
	styles: (theme, params: TextStylesParams) => ({
		...(params.variant === "link" && {
			root: {
				color: nord["Frost2"],
				borderRadius: theme.radius.xs,
				transition: "all 200ms ease",

				"&:hover": {
					textDecoration: "none",
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.fn.rgba(nord["PolarNight4"], 0.8)
							: theme.fn.rgba(nord["SnowStorm3"], 0.45),
				},
			},
		}),
		...(params.variant == ("text" || undefined) &&
			params.color === "dimmed" && {
				root: {
					opacity: theme.colorScheme === "dark" ? 0.66 : 0.55,
				},
			}),
	}),
};
