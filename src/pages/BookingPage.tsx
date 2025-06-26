import React, { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import CustomCalendar from "../components/CustomCalendar"
import TimeSlots from "../components/TimeSlots"

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2024, 8, 9)) // September 9, 2024
  const [selectedTime, setSelectedTime] = useState("14:30")
  const [selectedPlan, setSelectedPlan] = useState("1hour")
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking confirmed:", { ...formData, selectedDate, selectedTime, selectedPlan })
  }

  const formatDate = (date: Date) => {
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 
                   'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`
  }

  return (
    <div className="min-h-screen bg-gray-200 p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gray-200 p-4 sm:p-6 mb-2">
          <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-4">
            Réserver une séance
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-between">
            {/* Left Column - Form */}
            <div className="sm:w-1/2 lg:w-1/3 w-full">
              {/* Trial Session Banner */}
              <div className="flex items-center gap-3 mb-10">
                <img 
                  src="/assets/gift_2559090.png" 
                  alt="Gift" 
                  className="w-6 h-6 object-contain "
                />
                <span className="text-lg font-medium text-gray-600 mt-1">1 séance d'essai gratuite</span>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <Input
                  placeholder="Nom & prénom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white"
                />
                <Input
                  placeholder="E-mail"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white"
                />
              </div>
            </div>

            {/* Right Column - Pricing */}
            <div className="sm:w-1/2 lg:w-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-10">
                Cours privé - particulier
              </h2>
              
              {/* Pricing */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={() => setSelectedPlan("1hour")}
                  className={`px-4 sm:px-8 py-4 sm:py-6 rounded-xl text-center flex-1 ${
                    selectedPlan === "1hour"
                      ? "bg-blue-500 text-white"
                      : " text-gray-700"
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-bold">60.-</div>
                  <div className="text-sm font-bold">Pour 1 heure</div>
                </button>
                <button
                  onClick={() => setSelectedPlan("11hours")}
                  className={`px-4 sm:px-8 py-4 sm:py-6 rounded-xl text-center flex-1 ${
                    selectedPlan === "11hours"
                      ? "bg-blue-500 text-white"
                      : " text-gray-700"
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-bold">600.-</div>
                  <div className="text-sm font-bold">Pour 11 heure</div>
                </button>
              </div>

              {/* Payment Methods */}
              <div className="flex items-center gap-4">
                <span className="text-gray-600 mr-4 font-medium">Paiement par</span>
                <div className="inline-flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/assets/twint_logo.png" 
                      alt="TWINT" 
                      className="w-full h-8 object-contain rounded"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <img 
                      src="/assets/cash_icon.png" 
                      alt="Cash" 
                      className="w-8 h-8 object-contain rounded"
                    />
                    <span className="text-sm">cash</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 py-8 sm:py-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Calendar */}
            <div>
              <CustomCalendar
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
              />
            </div>

            {/* Time Slots + Summary */}
            <div>
              <TimeSlots
                selectedTime={selectedTime}
                onTimeSelect={setSelectedTime}
              />
              
              {/* Summary and Confirm */}
              <div className="pt-6 pb-8 sm:pb-10 text-center px-4 sm:px-10 bg-gray-100 mx-auto rounded-b-xl rounded-l-xl">
                <div className="text-lg sm:text-xl font-bold text-gray-800 mb-6 sm:mb-10">
                  {formatDate(selectedDate)} à {selectedTime}
                </div>
                <Button
                  onClick={handleSubmit}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 sm:px-12 py-4 sm:py-8 text-base sm:text-lg font-bold rounded-full w-full sm:min-w-[300px] sm:w-auto"
                >
                  CONFIRMER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 