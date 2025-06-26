import React, { useState, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

interface CustomCalendarProps {
  selectedDate?: Date
  onDateSelect?: (date: Date) => void
  className?: string
}

const DAYS_OF_WEEK = ["L", "M", "M", "J", "V", "S", "D"]
const MONTHS_FR = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
]

export default function CustomCalendar({ 
  selectedDate, 
  onDateSelect, 
  className = "" 
}: CustomCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const calendarData = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    
    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)
    
    // Get the day of week for the first day (0 = Sunday, 1 = Monday, etc.)
    // Convert to our format (0 = Monday, 1 = Tuesday, etc.)
    let firstDayOfWeek = firstDay.getDay()
    firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1
    
    const daysInMonth = lastDay.getDate()
    
    // Create calendar grid
    const calendarDays: (number | null)[] = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(null)
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(day)
    }
    
    return {
      monthName: MONTHS_FR[month],
      year,
      month,
      calendarDays
    }
  }, [currentDate])

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const handleDateClick = (day: number) => {
    if (onDateSelect) {
      const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      onDateSelect(newDate)
    }
  }

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false
    
    return selectedDate.getDate() === day &&
           selectedDate.getMonth() === currentDate.getMonth() &&
           selectedDate.getFullYear() === currentDate.getFullYear()
  }

  return (
    <div className={`bg-white ${className}`}>
      {/* Header with month navigation */}
      <div className="flex items-center justify-between mb-8 sm:mb-12">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={handlePrevMonth}
          className="h-10 w-10 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </Button>
        
        <h2 className="text-2xl sm:text-3xl font-bold">
          {calendarData.monthName} {calendarData.year}
        </h2>
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={handleNextMonth}
          className="h-10 w-10 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </Button>
      </div>

      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center mb-6 sm:mb-8">
        {DAYS_OF_WEEK.map((day) => (
          <div key={day} className="text-xs sm:text-sm font-bold text-gray-700">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2 sm:gap-3 lg:gap-5">
        {calendarData.calendarDays.map((day, index) => (
          <div key={index} className="aspect-square">
            {day ? (
              <button
                onClick={() => handleDateClick(day)}
                className={`w-full h-full p-1 sm:p-2 lg:p-3 text-center rounded-lg transition-colors text-sm sm:text-base ${
                  isDateSelected(day)
                    ? "bg-blue-500 text-white font-bold"
                    : "bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300"
                }`}
              >
                {day}
              </button>
            ) : (
              <div className="w-full h-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 