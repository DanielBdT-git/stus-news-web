// the following code mostly taken from the Astro docs
// https://docs.astro.build/en/guides/content-collections/#defining-build-time-content-collections

// step 1. import utilities from `astro:content`
import { defineCollection } from "astro:content";

// step 2. import the loader
// going with glob here since we're indexing the entire thing at once.
// maybe I should use file for the homepage since we're only using the first few?
// either way, "all stories" will show the entire thing
import { glob } from "astro/loaders";

// step 3. import zod
import { z } from "astro/zod";

// step 4. define a loader and schema for each collection
// if using the file loader for the homepage, make a second collection
// NOTE that the `base` references the PROJECT ROOT `/`
// ie: it's an ABSOLUTE filepath
const stories = defineCollection({
  loader: glob({base: './src/pages/stories', pattern: "**/*.md"}),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    credits: z.object({
      image: z.optional(z.string()),
      sources: z.optional(z.array(z.string()))
    }),
    opinion:z.optional(z.boolean())
  })
})

// step 5. export the collection object
// export all the collections (comma-separated) in those curly braces
export const collections = { stories }
