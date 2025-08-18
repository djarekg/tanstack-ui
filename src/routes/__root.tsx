/// <reference types="vite/client" />
import Header from '@/components/header.js';
import { theme } from '@/setup/theme.js';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import fontsourceVariableRobotoCss from '@fontsource-variable/roboto?url';
import {
  Container,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import React from 'react';

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: 'stylesheet', href: fontsourceVariableRobotoCss }],
  }),
  component: RootComponent,
});

export function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function Providers({ children }: { children: React.ReactNode; }) {
  const emotionCache = createCache({ key: 'css' });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

export function RootDocument({ children }: { children: React.ReactNode; }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <Providers>
          <Header />

          <Container component='main' sx={{ paddingBlock: 4 }}>
            {children}
          </Container>
        </Providers>

        <TanStackRouterDevtools position='bottom-right' />
        <Scripts />
      </body>
    </html>
  );
}
