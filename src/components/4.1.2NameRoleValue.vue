<template>
    <div>
        <h1>Span as a submit</h1>
        <label>
            <span>Name</span>
            <input id='name' type='text'/>
        </label>
        <br/>
        <span v-on:click='()=>clear()'>Submit</span>
    </div>
</template>

<script>
export default {
    name: 'NameRoleValue',
    methods: {
        clear() {
            document.getElementById('name').value = ""
        }
    }
}
</script>