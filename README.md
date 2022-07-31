# @yungerdev/theme

A Mantine theme object based on the Nord palette. ([Light](https://i.imgur.com/qM7SQjC.jpg)・[Dark](https://i.imgur.com/JAZjk75.jpg))

## Installation

```bash
# With yarn
yarn add @yungerdev/theme
# With npm
npm install @yungerdev/theme
```

## Usage

Basic usage

```tsx
import { MantineProvider } from "@mantine/core";
import { theme } from "@yungerdev/theme";

function Demo() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  );
}
```

With a custom `colorScheme` and `ColorSchemeProvider`

```tsx
import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { theme } from "@yungerdev/theme";

function Demo() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ ...theme, colorScheme }} withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
```

## License

MIT