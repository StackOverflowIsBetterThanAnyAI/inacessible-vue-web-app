<template>
    <div>
        <h1>No timing adjustment</h1>
        <p>
            You will be returned to the home page in a few seconds.
        </p>
    </div>
</template>

<script>
function handleRedirect(){
    window.setTimeout(()=>{window.location.href="/"}, 1000);
}

export default {
    name: 'TimeAdjustable',
    mounted() {
        handleRedirect()
    }
}
</script>