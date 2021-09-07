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
                    <input type="text" name="extension" id="extension" class="px-2 w-full h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>

                <div class="w-1/4">
                    <label for="fullname" class="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="fullname" id="fullname" class="px-2 w-full h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>

                <div class="w-1/4">
                    <label for="budget" class="block text-sm font-medium text-gray-700">Budget Number</label>
                    <input type="text" name="budget" id="budget" class="px-2 w-full h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>

                <div class="w-1/4">
                    <label for="destination" class="block text-sm font-medium text-gray-700">Destination Number</label>
                    <input type="text" name="destination" id="destination" class="px-2 w-full h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>
            </div>
            <div class="space-x-8 flex my-4">
                <div class="w-1/2">
                    <label class="block text-sm font-medium text-gray-700">Destination Type</label>
                    <toggle state0="International" state1="Local"></toggle>
                </div>
                <div class="w-1/2">
                    <label class="block text-sm font-medium text-gray-700">Destination Type</label>
                    <toggle state0="Official" state1="Personal"></toggle>
                </div>
            </div>
            <div class="space-x-8 flex flex-row my-4">
                <div class="w-1/3">
                    <label for="destination" class="block text-sm font-medium text-gray-700">Time Booked</label>
                    <input type="time" name="destination" id="destination" class="w-full px-2 h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>

                <div class="w-1/3">
                    <label for="tconnected" class="block text-sm font-medium text-gray-700">Time Connected</label>
                    <input type="time" name="tconnected" id="tconnected" class="w-full px-2 h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>

                <div class="w-1/3">
                    <label for="tfinished" class="block text-sm font-medium text-gray-700">Time Finished</label>
                    <input type="time" name="tfinished" id="tfinished" class="w-full px-2 h-10 border-2 border-gray-300 focus:border-purple-500 rounded"/>
                </div>
            </div>

            <div class="my-4 w-full">
                <label class="block text-sm font-medium text-gray-700">Remark</label>
                <three-way-toggle state0="Success" state1="Not Applicable" state2="No Response"></three-way-toggle>
            </div>

            <div class="space-x-4 flex my-8 self-end">
                <a href="#" class="bg-purple-500 hover:bg-purple-700 text-white text-center py-2 px-8 rounded">Save</a>
                <a href="#" class="border-2 bg-gray-200 hover:bg-gray-300 hover:border-gray-300 text-center px-8 py-2 rounded">Clear</a>
            </div>
        </div>
    `
}