import type { Dir, resource, skill } from "./types/mod.ts";
import type { State } from "./state.ts";

type DiscoverInput = {
  root: Dir;
  state: State;
};

type SkillTree = {
  root: Dir;
  skills: Node<SkillNode>[];
};

type Node<T = SkillNode | ResourceNode> = {
  node: T;
  children: Node[];
};

type SkillNode = {
  type: "skill";
  skill: skill.Meta;
};

type ResourceNode = {
  type: "resource";
  resource: resource.Resource;
};

export const discover = (input: DiscoverInput): Promise<SkillTree> => {
  throw new Error("not implemented");
};
