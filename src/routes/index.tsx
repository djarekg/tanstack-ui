import {
  Stack,
  Typography,
} from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

export const Route = createFileRoute('/')({
  validateSearch: z.object({
    count: z.number().optional(),
  }),
  component: RouteComponent,
});

export function RouteComponent() {
  return (
    <Stack alignItems='center'>
      <Typography variant='h1' marginBlockEnd={4}>
        Hello world!
      </Typography>
    </Stack>
  );
}
