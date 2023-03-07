import React, { useState, useEffect } from 'react'
import WeekEvalModal from './WeekEvalModal.js'
import Years from './Years.js'

function MainPage(props) {
  const [weekBoxes, setWeekBoxes] = useState([]);

  useEffect(() => {
    setWeekBoxes(new Array(props.totalWeeks).fill({ notes: '' }))
  }, [props.totalWeeks])

  const updateNotes = (newNotes, index) => {
    setWeekBoxes(prev => prev.map((week, i) => {
      if (index === i) {
        return { notes: newNotes }
      } else {
        return week
      }
    }))
  }

  return (
    <>
      {
        props.weeksLived &&
        <div className='weekContainer'>
          <Years
            birthYear={props.birthYear}
            weeksLived={props.weeksLived}
          />
          <div className='grid-container'>
            {weekBoxes.map((week, i) => (

              <WeekEvalModal
                className='weekBox'
                key={i}
                index={i}
                updateNotes={updateNotes}
                notes={week.notes}
                icon={'add'}
                weeksLived={props.weeksLived}
              />
            ))}
          </div>
        </div>
      }
    </>


  )
}

export default MainPage