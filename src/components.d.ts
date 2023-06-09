/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Application } from "./models/model";
export { Application } from "./models/model";
export namespace Components {
    interface AppDialog {
        "action": any;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyPanel {
        "applications": Application[];
    }
}
export interface AppDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAppDialogElement;
}
export interface MyPanelCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyPanelElement;
}
declare global {
    interface HTMLAppDialogElement extends Components.AppDialog, HTMLStencilElement {
    }
    var HTMLAppDialogElement: {
        prototype: HTMLAppDialogElement;
        new (): HTMLAppDialogElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyPanelElement extends Components.MyPanel, HTMLStencilElement {
    }
    var HTMLMyPanelElement: {
        prototype: HTMLMyPanelElement;
        new (): HTMLMyPanelElement;
    };
    interface HTMLElementTagNameMap {
        "app-dialog": HTMLAppDialogElement;
        "my-component": HTMLMyComponentElement;
        "my-panel": HTMLMyPanelElement;
    }
}
declare namespace LocalJSX {
    interface AppDialog {
        "action"?: any;
        "onAppdialog-click"?: (event: AppDialogCustomEvent<{result:any, error:any}>) => void;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyPanel {
        "applications"?: Application[];
        "onSelected-tab-info"?: (event: MyPanelCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "app-dialog": AppDialog;
        "my-component": MyComponent;
        "my-panel": MyPanel;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-dialog": LocalJSX.AppDialog & JSXBase.HTMLAttributes<HTMLAppDialogElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-panel": LocalJSX.MyPanel & JSXBase.HTMLAttributes<HTMLMyPanelElement>;
        }
    }
}
