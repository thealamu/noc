import Toggle from "./toggle.js";
import ThreeWayToggle from "./three-way-toggle.js"

export default {
    components: {
        'toggle': Toggle,
        'three-way-toggle': ThreeWayToggle,
    },
    template: `
        <div class="space-y-16 flex flex-col">
            <div class="space-x-8 flex flex-row">
                <div class="w-1/4">
                    <label for="extension" class="block text-sm font-medium text-gray-700">Extension</label>
                    <input v-model="extn" type="text" name="extension" id="extension" class="px-2 w-full h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>

                <div class="w-1/4">
                    <label for="fullname" class="block text-sm font-medium text-gray-700">Full Name</label>
                    <input v-model="fullname" type="text" name="fullname" id="fullname" class="px-2 w-full h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>

                <div class="w-1/4">
                    <label for="budget" class="block text-sm font-medium text-gray-700">Budget Number</label>
                    <input v-model="budget" type="text" name="budget" id="budget" class="px-2 w-full h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>

                <div class="w-1/4">
                    <label for="destination" class="block text-sm font-medium text-gray-700">Destination Number</label>
                    <input v-model="destination" type="text" name="destination" id="destination" class="px-2 w-full h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>
            </div>
            <div class="space-x-8 flex my-4">
                <div class="w-1/2">
                    <label class="block text-sm font-medium text-gray-700">Destination Type</label>
                    <toggle @change="onDestTypeChange" state0="International" state1="Local"></toggle>
                </div>
                <div class="w-1/2">
                    <label class="block text-sm font-medium text-gray-700">Budget Type</label>
                    <toggle @change="onBudgetTypeChange" state0="Official" state1="Personal"></toggle>
                </div>
            </div>
            <div class="space-x-8 flex flex-row my-4">
                <div class="w-1/3">
                    <div class="flex justify-between">
                        <label for="tbooked" class="block text-sm font-medium text-gray-700">Time Booked</label>
                        <span @click="onTimeBooked" class="text-sm font-bold hover:text-purple-500 cursor-pointer">Now</span>
                    </div>
                    <input v-model="tBooked" type="time" name="tbooked" id="tbooked" class="w-full px-2 h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>

                <div class="w-1/3">
                    <div class="flex justify-between">
                        <label for="tconnected" class="block text-sm font-medium text-gray-700">Time Connected</label>
                        <span @click="onTimeConnected" class="text-sm font-bold hover:text-purple-500 cursor-pointer">Now</span>
                    </div>
                    <input v-model="tConnected" type="time" name="tconnected" id="tconnected" class="w-full px-2 h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>

                <div class="w-1/3">
                    <div class="flex justify-between">
                        <label for="tfinished" class="block text-sm font-medium text-gray-700">Time Finished</label>
                        <span @click="onTimeFinished" class="text-sm font-bold hover:text-purple-500 cursor-pointer">Now</span>
                    </div>
                    <input v-model="tFinished" type="time" name="tfinished" id="tfinished" class="w-full px-2 h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>
            </div>

            <div class="my-4 w-full">
                <label class="block text-sm font-medium text-gray-700">Remark</label>
                <three-way-toggle @change="onRmkChange" state0="Success" state1="Not Applicable" state2="No Response"></three-way-toggle>
            </div>

            <div class="space-x-4 flex my-8 self-end">
                <button @click="submit" class="bg-purple-500 hover:bg-purple-700 text-white text-center py-2 px-8 rounded">Save</button>
                <button @click="clear" class="border-2 bg-gray-200 hover:bg-gray-300 hover:border-gray-300 text-center px-8 py-2 rounded">Clear</button>
            </div>
        </div>
    `,
    data() {
        return {
            extn: '',
            fullname: '',
            budget: '',
            destination: '',
            isInternational: true,
            isOfficial: true,
            tBooked: '',
            tConnected: '',
            tFinished: '',
            remark: '',
        }
    },
    methods: {
        onTimeBooked() {
            this.tBooked = this.currentTime()
        },
        onTimeConnected() {
            this.tConnected = this.currentTime()
        },
        onTimeFinished() {
            this.tFinished = this.currentTime()
        },
        currentTime() {
            return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})
        },
        submit() {
            // log all the data as a single object
            const data = {
                extn: this.extn,
                fullname: this.fullname,
                budget: this.budget,
                destination: this.destination,
                isInternational: this.isInternational,
                isOfficial: this.isOfficial,
                tBooked: this.tBooked,
                tConnected: this.tConnected,
                tFinished: this.tFinished,
                remark: this.remark,
            }
            console.log(data)
        },
        onDestTypeChange(val) {
            this.isInternational = val.toLowerCase() === "international"
        },
        onBudgetTypeChange(val) {
            this.isOfficial = val.toLowerCase() === "official"
        },
        onRmkChange(val) {
            this.remark = val
        },
        clear() {
            // reset all data
            this.extn = ''
            this.fullname = ''
            this.budget = ''
            this.destination = ''
            this.tBooked = ''
            this.tConnected = ''
            this.tFinished = ''
        }
    },
}