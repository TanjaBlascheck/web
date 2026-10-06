import { defineCollection} from 'astro:content';
import { z } from 'zod';
import { file } from 'astro/loaders';

const deadlines = defineCollection({
  loader: file("src/data/deadlines.json"),
  schema: z.object({
    id: z.string(),
    category: z.string(),
    type: z.string(),
    originalDate: z.string().datetime({ offset: true }), // Validates full ISO strings with offsets
    extendedDate: z.string().datetime({ offset: true }).optional()
  })
});

export const collections = { deadlines };