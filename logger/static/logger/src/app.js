import callDetailsEntry from "./components/call-details-entry.js"

export default {
    components: {
        "call-details-entry": callDetailsEntry,
    },
    template: `
        <div class="flex flex-row justify-end mx-4 my-4">
            <div class="md:w-7/12">
                <call-details-entry></call-details-entry>
            </div>
        </div>
    `,
}