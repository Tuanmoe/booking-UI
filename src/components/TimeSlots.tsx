import React from "react"

interface TimeSlotsProps {
  selectedTime: string
  onTimeSelect: (time: string) => void
  disabledTimes?: string[]
}

const DEFAULT_TIME_SLOTS = [
  "8:30", "9:30", "10:30",
  "11:30", "12:30", "13:30", 
  "14:30", "15:30", "16:30",
  "17:30", "18:30", "19:30"
]

const DEFAULT_DISABLED_TIMES = ["12:30", "13:30"]

export default function TimeSlots({ 
  selectedTime, 
  onTimeSelect, 
  disabledTimes = DEFAULT_DISABLED_TIMES,
}: TimeSlotsProps) {
  
  const isTimeDisabled = (time: string) => {
    return disabledTimes.includes(time)
  }

  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Horaires</h2>
    <div className='bg-gray-100 p-6 sm:p-10 lg:p-14 rounded-t-xl rounded-r-xl'>
      <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-lg mx-auto">
        {DEFAULT_TIME_SLOTS.map((time) => (
            <button
            key={time}
            onClick={() => onTimeSelect(time)}
            className={`py-2 sm:py-3 px-2 sm:px-4 text-center rounded-xl sm:rounded-2xl font-medium transition-colors text-sm sm:text-base ${
                selectedTime === time
                ? "bg-blue-500 text-white text-lg font-bold"
                : isTimeDisabled(time)
                ? "bg-white text-gray-400  cursor-not-allowed"
                : "bg-white text-gray-700 font-bold hover:bg-gray-300"
            }`}
            disabled={isTimeDisabled(time)}
            >
            {time}
          </button>
        ))}
      </div>
    </div>
              </>
  )
} 