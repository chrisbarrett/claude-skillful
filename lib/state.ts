import { z } from "zod";
import { Dir, SkillFile } from "./types/mod.ts";

export const State = z.object({
  /** Directories to search for skills. */
  roots: Dir.array(),
  /** Skill files that have been suggested for loading this Claude Code session. */
  loaded: SkillFile.array(),
});

export type State = z.infer<typeof State>;
