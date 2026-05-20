<template>
    <div>
        <h1>A keyboard trap you cannot escape.</h1>
        <p>
            <label>
                Name
                <input id="name" type="text" tabindex="-1" @blur='() => focusId ("email")'/>
            </label>
            <label>
                Email
                <input id="email" type="text" tabindex="-2" @blur='() => focusId ("name")'/>
            </label>
        </p>
    </div>
</template>

<script>
export default {
    name: 'KeyboardTrap',
    methods: {
        focusId(id) {
            window.setTimeout(document.getElementById(id).focus(), 0);
        }
    }
}
</script>