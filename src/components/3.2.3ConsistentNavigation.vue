<template>
    <h1>The navbar is now reversed</h1>
</template>

<script>
export default {
    name: 'ConsistentNavigation',
    mounted() {
        document.getElementById('links').style.flexDirection = 'column-reverse';
    },
    beforeDestroy() {
        document.getElementById('links').style.flexDirection = 'column';
    }
}
</script>