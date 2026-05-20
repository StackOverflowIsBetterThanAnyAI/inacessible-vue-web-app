<template>
    <h1>The role of the navbar has changed.</h1>
</template>

<script>
export default {
    name: 'ConsistentIdentification',
    mounted(){
        document.getElementById('links').setAttribute('role', 'list')
    },
    beforeDestroy(){
        document.getElementById('links').setAttribute('role', 'navigation')
    }
}
</script>