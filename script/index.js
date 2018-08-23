MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
NUM_DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
WEEKDAY_LABEL = ["S", "M", "T", "W", "T", "F", "S"]
MONTHS_LABEL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// get elements
let container = document.getElementById('calendar-container')
let calendarMonthLabel = document.getElementById('calendar-month-label')
let calendarTable = document.getElementById('calendar-table')
let previousMonthButton = document.getElementById('previous-month-button')
let nextMonthButton = document.getElementById('next-month-button')

// render this month's calendar on load
let today = new Date()
let currentCalendarDate = new Date(today.getFullYear(), today.getMonth(), 1)
let currCal = new Calendar(currentCalendarDate)
currCal.createCalendar()


// Event listeners for rendering prev/next month
previousMonthButton.addEventListener('click', loadPreviousMonth)
nextMonthButton.addEventListener('click', loadNextMonth)

// Render previous month
function loadPreviousMonth(){
  removeCalendar()

  let currentMonth = currentCalendarDate.getMonth()
  let currentYear = currentCalendarDate.getFullYear()

  if(currentMonth - 1 < 0){
    currentCalendarDate = new Date(currentYear-1, 11, 1)
  }else{
    currentCalendarDate = new Date(currentYear, currentMonth-1, 1)
  }

  currCal = new Calendar(currentCalendarDate)
  currCal.createCalendar()
}

// Render next month
function loadNextMonth(){
  removeCalendar()

  let currentMonth = currentCalendarDate.getMonth()
  let currentYear = currentCalendarDate.getFullYear()

  if(currentMonth + 1 > 11){
    currentCalendarDate = new Date(currentYear+1, 0, 1)
  }else{
    currentCalendarDate = new Date(currentYear, currentMonth+1, 1)
  }

  currCal = new Calendar(currentCalendarDate)
  currCal.createCalendar()
}

// Remove current calendar table before rendering new calendar
function removeCalendar(){
  let rows = calendarTable.querySelectorAll('tr')
  rows.forEach(row => row.remove())
}
