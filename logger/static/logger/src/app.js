import callDetailsEntry from "./components/call-details-entry.js"
import NavBar from "./components/navbar.js"

export default {
    components: {
        "call-details-entry": callDetailsEntry,
        "nav-bar": NavBar,
    },
    template: `
        <nav-bar></nav-bar>
        <div class="flex flex-row justify-end mx-4 my-4">
            <div class="md:w-7/12">
                <call-details-entry></call-details-entry>
            </div>
        </div>
    `,
}