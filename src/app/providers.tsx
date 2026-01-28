"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { useState } from "react";
import theme from "./theme/theme";
import createEmotionCache from "@/theme/emotionCache";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  // ensures same cache during hydration
  const [cache] = useState(() => createEmotionCache());

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
