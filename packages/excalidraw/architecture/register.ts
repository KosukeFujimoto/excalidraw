import type { Component } from "./types";

export let actions: readonly Component[] = [];

export const register = <T extends Component>(component: T) => {
  actions = actions.concat(component);
  return component as T & {
    keyTest?: unknown extends T["keyTest"] ? never : T["keyTest"];
  };
};
