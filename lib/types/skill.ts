import * as path from "@std/path";
import { z } from "zod";

export const File = z
  .string()
  .refine(
    (it) => path.basename(it).toLowerCase() === "skill.md",
    "Must be a SKILL.md file",
  )
  .refine((it) => path.isAbsolute(it), "Path must be absolute")
  .brand("skill-file");

export type File = z.infer<typeof File>;

export const Meta = z.object({
  name: z.string(),
  path: File,
  description: z.string().optional(),
  keywords: z.string().array().optional().default([]),
});

export type Meta = z.infer<typeof Meta>;
