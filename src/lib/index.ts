import { browser } from '$app/env';
import { createObserver } from './shared';

let observer: IntersectionObserver;
let nodeList: Array<IntersectType> = [];

const callback: IntersectCallbackType = (node) => {
    observer.unobserve(node);
    nodeList = nodeList.filter(nodeEntry => nodeEntry !== node)
};

if (browser) {
    observer = createObserver({callback});
}

const lazyLoad = (node: IntersectType): IActionReturn<IntersectType> => {
    if (!browser) return;
    observer.observe(node);
    nodeList.push(node);
    return {
        destroy(): void {
            observer && observer.unobserve(node);
        }
    };
};

export default lazyLoad;

export const newObserver = (options: IntersectionObserverInit = {}): void => {
    if (!browser) return;
    if (observer) {
        observer.disconnect();
    }
    observer = createObserver({options, callback});
    nodeList.forEach((node) => observer.observe(node));
}
