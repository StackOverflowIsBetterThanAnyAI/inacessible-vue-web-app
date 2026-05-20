<template>
    <div>
        <h1>A few quick flashes</h1>
        <div id="flashingBackground">
            Background color that changes.
        </div>
    </div>
</template>

<script>

let x;
let background;
let counter = 10;

const change = () => {
    let color;
    if (x === 1 && counter > 0) {
        color = "red";
        x = 2;
        counter--;
    } else {
        color = "green";
        x = 1;
    }

    document.getElementById("flashingBackground").style.background = color;
}

export default {
    name: 'ThreeFlashes',
    mounted() {
        background = setInterval(change, 100);
    },
    beforeDestroy() {
        clearInterval(background);
    }
}
</script>