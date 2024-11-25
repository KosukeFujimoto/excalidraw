import { getSelectedElements } from "../scene";
import type { UIAppState } from "../types";
import type { NonDeletedExcalidrawElement } from "./types";

export const showArchitectureComponentList = (
  appState: UIAppState,
  elements: readonly NonDeletedExcalidrawElement[],
) =>
  Boolean(
    !appState.viewModeEnabled &&
      ((appState.activeTool.type !== "custom" &&
        (appState.editingTextElement ||
          (appState.activeTool.type !== "selection" &&
            appState.activeTool.type !== "eraser" &&
            appState.activeTool.type !== "hand" &&
            appState.activeTool.type !== "laser" &&
            appState.activeTool.type === "cloud"))) ||
        getSelectedElements(elements, appState).length),
  );
