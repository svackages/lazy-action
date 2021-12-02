import { browser } from '$app/env';

declare interface IActionReturn<T> {
    update?: (parameters: T) => void,
	destroy?: () => void
}

let observer: IntersectionObserver;

const onIntersect = (entries: IntersectionObserverEntry[]):void => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute('src', (entry.target as HTMLImageElement).dataset.src);
        }
    });
}

if (browser) {
    observer = new IntersectionObserver(onIntersect, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });
}

const lazyLoadImage = (node: HTMLImageElement|HTMLIFrameElement): IActionReturn<HTMLImageElement|HTMLIFrameElement> => {
    if (!browser) return;
    observer.observe(node);
    return {
        destroy(): void {
            observer && observer.unobserve(node);
        }
    };
};

export default lazyLoadImage;