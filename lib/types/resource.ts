import * as path from "@std/path";
import { z } from "zod";
import { MatchKeyword } from "./scalars.ts";

export const MdFile = z
  .string()
  .refine(
    (it) => path.extname(it).toLowerCase() === ".md",
    "Must be a markdown file",
  )
  .refine((it) => path.isAbsolute(it), "Path must be absolute")
  .brand("md-file");

export type MdFile = z.infer<typeof MdFile>;

export const Resource = z.object({
  path: MdFile,
  keywords: MatchKeyword.array().optional().default([]),
});

export type Resource = z.infer<typeof Resource>;
