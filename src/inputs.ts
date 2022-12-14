import { z } from 'zod';

export const createUserInput = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
});

export type IcreateUserInput = z.infer<typeof createUserInput>;
