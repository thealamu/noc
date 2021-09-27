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
                    <label for="extension" class="block text-sm font-medium text-gray-700">Caller Extension</label>
                    <input v-model="extn" type="number" name="extension" id="extension" class="px-2 w-full h-10 border-2 border-gray-300 focus:border-blue-500 rounded"
						:class="{ 'border-red-400': extnErr }"
					/>
                </div>

                <div class="w-1/4">
                    <label for="fullname" class="block text-sm font-medium text-gray-700">Full Name</label>
                    <input v-model="fullname" type="text" name="fullname" id="fullname" class="px-2 w-full h-10 border-2 border-gray-300 focus:border-blue-500 rounded"
						:class="{ 'border-red-400': fullnameErr }"
					/>
                </div>

                <div class="w-1/4">
                    <label for="budget" class="block text-sm font-medium text-gray-700">Budget Number</label>
                    <input v-model="budget" type="text" name="budget" id="budget" class="px-2 w-full h-10 border-2 border-gray-300 focus:border-blue-500 rounded"
						:class="{ 'border-red-400': budgetErr }"
					/>
                </div>

                <div class="w-1/4">
                    <label for="destination" class="block text-sm font-medium text-gray-700">Destination Number</label>
                    <input v-model="destination" type="tel" name="destination" id="destination" class="px-2 w-full h-10 border-2 border-gray-300 focus:border-blue-500 rounded"
						:class="{ 'border-red-400': destinationErr }"
					/>
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
                        <span @click="onTimeBooked" class="text-sm font-bold hover:text-blue-500 cursor-pointer">Now</span>
                    </div>
                    <input v-model="tBooked" type="time" name="tbooked" id="tbooked" class="w-full px-2 h-10 border-2 border-gray-300 focus:border-blue-500 rounded"
						:class="{ 'border-red-400': tBookedErr }"
					/>
                </div>

                <div class="w-1/3">
                    <div class="flex justify-between">
                        <label for="tconnected" class="block text-sm font-medium text-gray-700">Time Connected</label>
                        <span @click="onTimeConnected" class="text-sm font-bold hover:text-blue-500 cursor-pointer">Now</span>
                    </div>
                    <input v-model="tConnected" type="time" name="tconnected" id="tconnected" class="w-full px-2 h-10 border-2 border-gray-300 focus:border-blue-500 rounded"
						:class="{ 'border-red-400': tConnectedErr }"
					/>
                </div>

                <div class="w-1/3">
                    <div class="flex justify-between">
                        <label for="tfinished" class="block text-sm font-medium text-gray-700">Time Finished</label>
                        <span @click="onTimeFinished" class="text-sm font-bold hover:text-blue-500 cursor-pointer">Now</span>
                    </div>
                    <input v-model="tFinished" type="time" name="tfinished" id="tfinished" class="w-full px-2 h-10 border-2 border-gray-300 focus:border-blue-500 rounded"
						:class="{ 'border-red-400': tFinishedErr }"
					/>
                </div>
            </div>

            <div class="my-4 w-full">
                <label class="block text-sm font-medium text-gray-700">Remark</label>
                <three-way-toggle @change="onRmkChange" state0="Success" state1="Not Applicable" state2="No Response"></three-way-toggle>
            </div>

            <div class="space-x-4 flex my-8 self-end">
                <button @click="submit" class="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-8 rounded"
                    :class="{ 'opacity-50': isSaving }"
                >Save</button>
                <button @click="clear" class="border-2 bg-gray-200 hover:bg-gray-300 hover:border-gray-300 text-center px-8 py-2 rounded">Clear</button>
            </div>
        </div>
    `,
    data() {
        return {
            extn: '',
			extnErr: false,

            fullname: '',
			fullnameErr: false,

            budget: '',
			budgetErr: false,

            destination: '',
			destinationErr: false,

            tBooked: '',
			tBookedErr: false,

            tConnected: '',
			tConnectedErr: false,

            tFinished: '',
			tFinishedErr: false,

            isInternational: true,
            isOfficial: true,
            remark: 'Success',

            isSaving: false
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
		validateInputs() {
			if (this.isEmpty(this.extn)) {
				this.extnErr = true
				return false
			} else {
				this.extnErr = false
			}

			if (this.isEmpty(this.fullname)) {
				this.fullnameErr = true
				return false
			} else {
				this.fullnameErr = false
			}
			
			if (this.isEmpty(this.budget)) {
				this.budgetErr = true
				return false
			} else {
				this.budgetErr = false
			}

			if (this.isEmpty(this.destination)) {
				this.destinationErr = true
				return false
			} else {
				this.destinationErr = false
			}

			if (this.isEmpty(this.tBooked)) {
				this.tBookedErr = true
				return false
			} else {
				this.tBookedErr = false
			}

			if (this.remark !== "Success") {
				return true
			}
			
			// remark is success, check tConn and tFin
			if (this.isEmpty(this.tConnected)) {
				this.tConnectedErr = true
				return false
			} else {
				this.tConnectedErr = false
			}

			if (this.isEmpty(this.tFinished)) {
				this.tFinishedErr = true
				return false
			} else {
				this.tFinishedErr = false
			}

			return true
		},
		isEmpty(str) {
			return str.trim() === ""
		},
        submit() {
            if (this.isSaving) { 
                return
            }
            this.isSaving = true
			// run input validations
			if (!this.validateInputs()) {
				alert("Please fill missing fields")
				return
			}
            // log all the data as a single object
            this.saveCallDetails(this.toBackendFormat(
                {
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
            ))
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
        },
        saveCallDetails(data) {
            var that = this
            // post the data to /log
            fetch("/log", {
               method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
               body: JSON.stringify(data) 
            })
			.then(function(response) {
				if (response.ok) {
					alert("Call has been saved")
					that.clear()
				} else {
					alert("Could not save call, an error occured")
				}
                that.isSaving = false
			})
            .catch(err => console.log(err))
        },
        toBackendFormat(data) {
            return {
                "extn": data["extn"],
                "fullname": data["fullname"],
                "budget": data["budget"],
                "destination": data["destination"],
                "is_official": data["isOfficial"],
                "is_international": data["isInternational"],
                "time_booked": this.unixTimeOf(data["tBooked"]),
                "time_connected": this.unixTimeOf(data["tConnected"]),
                "time_finished": this.unixTimeOf(data["tFinished"]),
                "remark": data["remark"]
            }
        },
        unixTimeOf(timeStr) {
            let now = new Date()
            const [hh, mm] = timeStr.split(":")
            //now.setHour
            // convert time in format 05:56 to unix timestamp
            now.setHours(parseInt(hh))
            now.setMinutes(parseInt(mm))

            return now.getTime() / 1000
        }
    },
}
