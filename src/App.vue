<template>
    <div class="containerStyle">
        <div class="navPanel">
            <img alt="logo" src="./assets/logo.png" />
            <nav id="links" role="navigation">
                <router-link to="/" class="bad-links">None</router-link>
                <router-link to="/text-alternatives" class="bad-links"
                    >Text Alternatives</router-link
                >
                <router-link to="/meaningful-sequence" class="links"
                    >Meaningful Sequence</router-link
                >
                <router-link to="/input-purpose" class="links"
                    >Incorrect Input Purpose</router-link
                >
                <router-link to="/audio-control" class="links"
                    >No Audio Control</router-link
                >
                <router-link to="/color-contrast-minimum" class="links"
                    >Insufficient Color Contrast</router-link
                >
                <router-link to="/text-resize" class="links"
                    >Text Resize</router-link
                >
                <router-link to="/image-of-text" class="links"
                    >Image Of Text</router-link
                >
                <router-link to="/color-contrast-enhanced" class="links"
                    >Color Contrast Enhanced</router-link
                >
                <router-link to="/text-spacing" class="links"
                    >Text Spacing</router-link
                >
                <router-link to="/keyboard-trap" class="links"
                    >Keyboard Trap</router-link
                >
                <router-link to="/shortcut" class="links">Shortcut</router-link>
                <router-link to="/link-purpose" class="links"
                    >Link Purpose</router-link
                >
                <router-link to="/headings-labels" class="links"
                    >Headings and Labels</router-link
                >
                <router-link to="/label-in-name" class="links"
                    >Label in Name</router-link
                >
                <router-link to="/page-lang" class="links"
                    >Page Language</router-link
                >
                <router-link to="/part-lang" class="links"
                    >Part Language</router-link
                >
                <router-link to="/on-input" class="links">On Input</router-link>
                <router-link to="/consistent-identification" class="links"
                    >Consistent Identification</router-link
                >
                <router-link to="/error-identification" class="links"
                    >Error Identification</router-link
                >
                <router-link to="/labels-instructions" class="links"
                    >Labels and Instructions</router-link
                >
                <router-link to="/name-role-value" class="links"
                    >Name Role Value</router-link
                >
            </nav>
        </div>
        <main class="inaccessibleContent">
            <router-view />
        </main>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
.containerStyle {
    width: 100%;
    flex: 1;
    flex-direction: row;
    padding-top: 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.inaccessibleContent {
    width: 80%;
    float: right;
}

.navPanel {
    width: 20%;
    float: left;
}

.bad-links {
    display: block;
    width: 70%;
    align-self: center;
    background-color: #f0f0f0;
    color: #2c3e50;
    text-decoration: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.links {
    display: block;
    width: 70%;
    align-self: center;
    margin: 5px auto;
    padding: 6px 12px;
    background-color: #f0f0f0;
    color: #2c3e50;
    text-decoration: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.links:hover,
bad-links:hover {
    background-color: #e0e0e0;
}

#links {
    display: flex;
    flex-direction: column;
}
</style>
