<template>
    <div>
        <h1>Moving content without ability to stop</h1>
        <div id="flashingBackground">
            Background color that changes.
        </div>
    </div>
</template>

<script>

let x;
let background;

const change = () => {
    let color;
    if (x === 1) {
        color = "red";
        x = 2;
    } else {
        color = "#00FA00";
        x = 1;
    }

    document.getElementById("flashingBackground").style.background = color;
}

export default {
    name: 'PauseStopHide',
    mounted() {
        background = setInterval(change, 4000);
    },
    beforeDestroy() {
        clearInterval(background);
    }
}
</script>