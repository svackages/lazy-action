<script lang="ts">
    import lazy, {newObserver} from '$lib/index';

    // You can overwrite the standard obeserver with the values you want
    newObserver({
        rootMargin: '70px 0px',
    });
</script>

<h1>Welcome to the lazy-action svackage</h1>
<p>Visit <a href="https://github.com/svackages/lazy-action">github</a> to read the documentation</p>

<p class="really-long-paragraph">
    This is a really long paragraph...
</p>

<img
    use:lazy
    data-src="https://picsum.photos/200/300"
    alt="something random" />

<iframe
    use:lazy
    data-src="https://reitzner.at"
    title="my website"></iframe>

<style>
    .really-long-paragraph {
        height: 150vh;
        background-color: lightblue;
    }
</style>
