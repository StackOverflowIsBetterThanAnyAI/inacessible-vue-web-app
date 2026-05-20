<template>
    <div>
        <h1>
            A link with some parts invisible to screen readers
        </h1>
        <a href="http://www.google.com">
            Goto 
            <span class="accessibly-hidden"> different </span>
            website homepage
        </a>
    </div>
</template>

<script>
export default {
    name: 'LabelName'
}
</script>