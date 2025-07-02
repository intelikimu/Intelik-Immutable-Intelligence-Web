"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  // Force dark theme by overriding any props passed in
  const darkModeProps = {
    ...props,
    defaultTheme: "dark",
    forcedTheme: "dark"
  };
  
  return <NextThemesProvider {...darkModeProps}>{children}</NextThemesProvider>;
} 