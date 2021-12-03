/// <reference types="@sveltejs/kit" />
declare interface IActionReturn<T> {
    update?: (parameters: T) => void,
	destroy?: () => void
}

type IntersectType = HTMLImageElement|HTMLIFrameElement;
type IntersectCallbackType = (node: HTMLImageElement|HTMLIFrameElement) => void;
