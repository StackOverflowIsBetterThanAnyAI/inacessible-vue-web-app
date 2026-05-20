<template>
    <div>
        <h1>Press 'a' to jump to name.</h1>
        <p>
            <label>
                Name
                <input id="name" type="text" tabindex="-1"/>
            </label>
            <label>
                Email
                <input id="email" type="text" tabindex="-2"/>
            </label>
        </p>
    </div>
</template>

<script>
function keyHandler(e){
    if(e.code === "KeyA") {
        window.setTimeout(document.getElementById('name').focus(), 0);
    }
}

export default {
    name: 'ShortCut',
    mounted() {
        document.addEventListener('keyup', keyHandler)
    },
    beforeDestroy() {
        document.removeEventListener('keyup', keyHandler)
    }
}
</script>