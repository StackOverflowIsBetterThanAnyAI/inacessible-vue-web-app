<template>
    <h1>The page language is no longer english.</h1>
</template>

<script>
export default {
    name: 'pageLang',
    mounted() {
        document.getElementsByTagName('html')[0].removeAttribute('lang');
    },
    beforeDestroy() {
        document.getElementsByTagName('html')[0].setAttribute('lang', 'en');
    }
}
</script>