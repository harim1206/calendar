class Calendar {
  constructor(currentCalendarDate){

    this.date = currentCalendarDate
    this.numDaysInMonth = NUM_DAYS_IN_MONTH[currentCalendarDate.getMonth()]

  }

  /*
  Creates an array of dates with leading blank spaces for rendering purposes. For ex, for Aug '18, return
  ["", "", "", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  */

  createDatesArray(){
    let datesArray = []
    for(let i=0; i<this.date.getDay(); i++)
    datesArray.push("")
    for(let i=1; i<=this.numDaysInMonth; i++)
    datesArray.push(i)

    return datesArray
  }

  createCalendar(){

    // Update calendar label
    calendarMonthLabel.innerHTML = `${MONTHS_LABEL[this.date.getMonth()]} ${this.date.getFullYear()}`

    renderCalendarHeader()
    let datesArray = this.createDatesArray()
    let calendarTable = document.getElementById('calendar-table')

    // Render dates in calendar table element
    // row interation
    for(let j=0; j<=5; j++){
      let row = document.createElement("tr")
      // col iteration
      for(let i=0+j*7; i<7+j*7; i++){
        let cell = document.createElement("td")
        // if sunday, apply red font color
        if(i%7===0) cell.setAttribute("id","sunday-cell")

        datesArray[i] ? cell.innerHTML = datesArray[i] : cell.innerHTML = ""
        row.appendChild(cell)
      }
      calendarTable.appendChild(row)
    }

  }
}

function renderCalendarHeader(){
  let calendarTable = document.getElementById('calendar-table')

  let row = document.createElement("tr")
  row.setAttribute("id", "table-header")

  for(let i=0; i<=6; i++){
    let cell = document.createElement("th")
    i===0 ? cell.setAttribute("id","sunday-cell") : null
    cell.innerText = WEEKDAY_LABEL[i]
    row.appendChild(cell)
  }
  calendarTable.appendChild(row)

}
