<template>
    <div>
        <h1>An input that cannot be selected.</h1>
        <p>
            <label>
                Name
                <input id="input" type="text" @focus='loseFocus()'/>
            </label>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Keyboard',
    methods: {
        loseFocus() {
            document.getElementById("input").blur()
        }
    }
}
</script>