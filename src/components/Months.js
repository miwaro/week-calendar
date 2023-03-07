import React, { useState, useEffect } from 'react'

function Months({ months }) {
  const [monthRange, setMonthRange] = useState(["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"])




  useEffect(() => {
    let allMonths = []

    for (let i = months; i < months + 12; i++) {
      allMonths.push(i)
    }
    setMonthRange(allMonths)


  }, [months])
  return (
    <div>
      {monthRange.map(months => {
        return <div>{months}</div>
      })}

    </div>
  )
}

export default Months