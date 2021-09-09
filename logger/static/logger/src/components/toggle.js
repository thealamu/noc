/* Toggle between two states */
export default {
    emits: ['change'],
    props: {
        state0: {
            type: String,
            required: true
        },
        state1: {
            type: String,
            required: true
        },
    },
    template: `
        <div class="h-10 border border-gray-300 rounded">
            <button class="h-full w-1/2" :class="{'bg-blue-500 text-white': !state }" @click="setState0">{{ this.state0 }}</button>
            <button class="h-full w-1/2" :class="{'bg-blue-500 text-white': state }" @click="setState1">{{ this.state1 }}</button>
        </div>
    `,
    data() {
        return {
            state: 0,
        }
    },
    methods: {
        setState0() {
            this.state = 0;
            this.$emit('change', this.state0);
        },
        setState1() {
            this.state = 1;
            this.$emit('change', this.state1);
        }
    }
}