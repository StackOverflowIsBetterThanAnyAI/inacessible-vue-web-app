<template>
    <div>
        <h1>An input that opens a new window.</h1>
        <p>
            <label>
                Name
                <input id="input" type="text" @focus='() => changeContext()'/>
            </label>
        </p>
    </div>
</template>

<script>
let temp = 0;
export default {
    name: 'OnInput',
    methods: {
        changeContext() {
            if (temp < 1){
                window.open('http://www.google.com');
                temp = 1;
            }
        }
    }
}
</script>