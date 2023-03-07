import React, { useState, useEffect } from 'react'

function Years({ birthYear, weeksLived }) {
  const [yearRange, setYearRange] = useState([])

  useEffect(() => {
    let allYears = []
    for (let i = birthYear; i < birthYear + 78; i++) {
      allYears.push(i)
    }
    setYearRange(allYears)
  }, [birthYear])

  return (
    <>
      {weeksLived &&
        <div style={{ paddingRight: '24px', color: 'black' }}>
          {yearRange.map(years => {
            return <div key={years} style={{ fontSize: '10px', paddingTop: '8px', transform: 'translate(0, 3px)' }}>{years}</div>
          })}
        </div>
      }
    </>
  )
}

export default Years