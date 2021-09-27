import callDetailsEntry from "./components/call-details-entry.js"

export default {
    components: {
        "call-details-entry": callDetailsEntry,
    },
    template: `
        <div class="flex flex-row justify-center mx-4 my-4">
            <div class="">
                <call-details-entry></call-details-entry>
            </div>
        </div>
    `,
}