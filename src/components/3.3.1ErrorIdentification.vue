<template>
    <div>
        <h1>A form with poor error identification</h1>
        <form>
            <label>
                <span>Enter a number &#x3C; 10</span><br/>
                <input id='number' type='text'/><br/>
            </label>
            <button type='submit' v-on:click='() => {isValid()}'>Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ErrorIdentification',
    methods: {
        isValid() {
            const val = document.getElementById('number').value;
            if (val < 0 || val > 10) {
                alert('Invalid Input');
            }
        }
    }
}
</script>