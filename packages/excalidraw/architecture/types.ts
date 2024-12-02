import type React from "react";
import type {
  ExcalidrawElement,
  OrderedExcalidrawElement,
} from "../element/types";
import type { StoreActionType } from "../store";
import type {
  AppClassProperties,
  AppState,
  BinaryFiles,
  ExcalidrawProps,
  UIAppState,
} from "../types";
import type { MarkOptional } from "../utility-types";

export type ComponentSource =
  | "ui"
  | "keyboard"
  | "contextMenu"
  | "api"
  | "commandPalette";

/** if false, the action should be prevented */
export type ComponentResult =
  | {
      elements?: readonly ExcalidrawElement[] | null;
      appState?: MarkOptional<
        AppState,
        "offsetTop" | "offsetLeft" | "width" | "height"
      > | null;
      files?: BinaryFiles | null;
      storeAction: StoreActionType;
      replaceFiles?: boolean;
    }
  | false;

type ComponentFn = (
  elements: readonly OrderedExcalidrawElement[],
  appState: Readonly<AppState>,
  formData: any,
  app: AppClassProperties,
) => ComponentResult | Promise<ComponentResult>;

export type UpdaterFn = (res: ComponentResult) => void;
export type ComponentFilterFn = (component: Component) => void;
export type ComponentName = "s3";

export type PanelComponentProps = {
  elements: readonly ExcalidrawElement[];
  appState: AppState;
  updateData: <T = any>(formData?: T) => void;
  appProps: ExcalidrawProps;
  data?: Record<string, any>;
  app: AppClassProperties;
};

export interface Component {
  name: ComponentName;
  label:
    | string
    | ((
        elements: readonly ExcalidrawElement[],
        appState: Readonly<AppState>,
        app: AppClassProperties,
      ) => string);
  keywords?: string[];
  icon?:
    | React.ReactNode
    | ((
        appState: UIAppState,
        elements: readonly ExcalidrawElement[],
      ) => React.ReactNode);
  PanelComponent?: React.FC<PanelComponentProps>;
  perform?: ComponentFn;
  keyPriority?: number;
  keyTest?: (
    event: React.KeyboardEvent | KeyboardEvent,
    appState: AppState,
    elements: readonly ExcalidrawElement[],
    app: AppClassProperties,
  ) => boolean;
  predicate?: (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    appProps: ExcalidrawProps,
    app: AppClassProperties,
  ) => boolean;
  checked?: (appState: Readonly<AppState>) => boolean;
  trackEvent:
    | false
    | {
        category:
          | "toolbar"
          | "element"
          | "canvas"
          | "export"
          | "history"
          | "menu"
          | "collab"
          | "hyperlink"
          | "search_menu";
        action?: string;
        predicate?: (
          appState: Readonly<AppState>,
          elements: readonly ExcalidrawElement[],
          value: any,
        ) => boolean;
      };
  /** if set to `true`, allow action to be performed in viewMode.
   *  Defaults to `false` */
  viewMode?: boolean;
}
