![svackage logo](https://raw.githubusercontent.com/svackages/persistent-store/main/logo.png)

![npm version](https://img.shields.io/npm/v/@svackages/lazy-action)
![license](https://img.shields.io/github/license/svackages/lazy-action)

# Svelte action lazy load

This action uses the `IntersectionObserver` to load images or iframes lazily.

It will replace `data-src` with `src`.

And of course it is fully typed 😉

## How to use
### Install
```bash
npm i @svackages/lazy-action
```

### Use in svelte component (svelte-kit only)
```html
<script>
    import lazy, {newObserver} from '@svackages/lazy-action';

    // You can overwrite the standard
    // obeserver with the values you want
    newObserver({
        rootMargin: '70px 0px',
    });
</script>

<img
    use:lazy
    data-src="https://picsum.photos/200/300"
    alt="something random" />

<iframe
    use:lazy
    data-src="https://reitzner.at"
    title="my website"></iframe>
```
### Use in svelte component (outside svelte-kit)
```html
<script>
    import lazy, {newObserver} from '@svackages/lazy-action/browser';

    // You can overwrite the standard
    // obeserver with the values you want
    newObserver({
        rootMargin: '70px 0px',
    });
</script>

<img
    use:lazy
    data-src="https://picsum.photos/200/300"
    alt="something random" />

<iframe
    use:lazy
    data-src="https://reitzner.at"
    title="my website"></iframe>
```

## REPL
https://svelte.dev/repl/f6514d9b90b344a1b1bcc14814470eee?version=3.44.2