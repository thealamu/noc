/* Toggle among three states */
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
        state2: {
            type: String,
            required: true
        }
    },
    template: `
        <div class="h-10 border border-gray-300 rounded">
            <button class="h-full w-1/3" :class="{'bg-blue-500 text-white': state === 0 }" @click="setState0">{{ this.state0 }}</button>
            <button class="h-full w-1/3" :class="{'bg-blue-500 text-white': state === 1 }" @click="setState1">{{ this.state1 }}</button>
            <button class="h-full w-1/3" :class="{'bg-blue-500 text-white': state === 2 }" @click="setState2">{{ this.state2 }}</button>
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
        },
        setState2() {
            this.state = 2;
            this.$emit('change', this.state2);
        }
    }
}