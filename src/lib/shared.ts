export const createObserver = ({
    options = {},
    callback,
}: {
    options?: IntersectionObserverInit,
    callback: IntersectCallbackType
}): IntersectionObserver => {
    return new IntersectionObserver(
        (entries: IntersectionObserverEntry[]): void => entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target as IntersectType
                target.setAttribute('src', target.dataset.src);
                callback(target);
            }
        }),
        Object.assign({
            rootMargin: '50px 0px',
            threshold: 0.01
        }, options)
    )
}
