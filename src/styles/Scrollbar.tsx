import React from "react";
import { Global } from "@mantine/core";

export const Scrollbar = () => (
  <Global
    styles={theme => ({
      "*::-webkit-scrollbar": {
        width: 9,
      },

      "*::-webkit-scrollbar-track": {
        boxShadow: `inset 0 0 8px ${
          theme.colorScheme === "dark"
            ? theme.colors.dark["9"]
            : theme.colors.gray["2"]
        }`,
      },

      "*::-webkit-scrollbar-thumb": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.night4["4"]
            : theme.colors.snow1["7"],
        border: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.fn.lighten(theme.colors.night4["4"], 0.05)
            : theme.fn.darken(theme.colors.snow1["7"], 0.05)
        }`,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.night4["3"]
              : theme.colors.snow1["9"],
        },
      },
    })}
  />
);
