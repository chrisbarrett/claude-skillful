import * as path from "@std/path";
import { z } from "zod";

export const Dir = z
  .string()
  .refine((it) => path.isAbsolute(it), "Path must be absolute")
  .brand("dir");

export type Dir = z.infer<typeof Dir>;

export const MatchKeyword = z.string().min(1).brand("match-keyword");

export type MatchKeyword = z.infer<typeof MatchKeyword>;

export const SkillFile = z.string().brand("skill-file");

export type SkillFile = z.infer<typeof SkillFile>;
