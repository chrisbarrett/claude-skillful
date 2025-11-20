import type { SkillFile } from "./types/mod.ts";
import type { State } from "./state.ts";

type SuggestInput = {
  prompt: string;
  state: State;
};

type SkillSuggestion = {
  /** Paths to skills that must be loaded now based on the prompt. */
  loadNow: SkillFile[];
};

export const suggest = (input: SuggestInput): Promise<SkillSuggestion> => {
  throw new Error("Not implemented");
};
