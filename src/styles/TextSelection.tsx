import React from "react";
import { Global } from "@mantine/core";

export const TextSelection = () => (
  <Global
    styles={theme => {
      const selectionColor = theme.fn.rgba(theme.other.nord["Frost2"], 0.5);
      theme.fn.rgba(theme.other.nord["Frost2"], 0.5);

      return {
        "::-moz-selection": {
          backgroundColor: selectionColor,
        },
        "::selection": {
          backgroundColor: selectionColor,
        },
      };
    }}
  />
);
