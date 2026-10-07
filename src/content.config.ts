import { defineCollection} from 'astro:content';
import { z } from 'zod';
import { file } from 'astro/loaders';

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const deadlines = defineCollection({
  // The file loader requires an id per entry; derive it from category + type
  // (which is also how DeadlineItem looks entries up) and reject duplicates.
  loader: file("src/data/deadlines.json", {
    parser: (text) => {
      const seen = new Set<string>();
      return JSON.parse(text).map((entry: { category: string; type: string }) => {
        const id = `${slug(entry.category)}-${slug(entry.type)}`;
        if (seen.has(id)) throw new Error(`Duplicate deadline: ${entry.category} / ${entry.type}`);
        seen.add(id);
        return { id, ...entry };
      });
    },
  }),
  schema: z.object({
    category: z.string(),
    type: z.string(),
    originalDate: z.string().datetime({ offset: true }), // Validates full ISO strings with offsets
    extendedDate: z.string().datetime({ offset: true }).optional()
  })
});

export const collections = { deadlines };