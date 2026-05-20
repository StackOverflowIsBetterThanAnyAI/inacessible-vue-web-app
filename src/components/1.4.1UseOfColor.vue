<template>
    <div>
        <h1>Some inaccessible content without a role</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse posuere consectetur diam, laoreet vulputate lacus 
            sollicitudin auctor. Phasellus nec sapien ligula. In lobortis 
            finibus egestas. Suspendisse <a v-bind:style="{color: '#2c3e50',textDecoration: 'none',}" target="new" href="http://www.google.com">purus</a> lorem, congue sit amet 
            laoreet nec, blandit vitae odio. Integer pretium est dui, 
            pulvinar consectetur risus scelerisque a. Donec varius 
            consectetur sem, ac varius justo blandit quis. Morbi lobortis 
            tempus bibendum. Phasellus erat mauris, laoreet et quam ac, 
            pellentesque malesuada quam. Donec at dolor tortor. Cras mollis 
            risus id ex dignissim, at dapibus purus faucibus. Nullam eu mi 
            eget massa mattis aliquet. Praesent rutrum erat odio. Aenean 
            consequat pharetra lectus vitae suscipit.
        </p>
    </div>
</template>

<script>
export default {
  name: 'UseOfColor'
}
</script>
