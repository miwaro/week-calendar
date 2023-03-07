import React, { useState } from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import './App.css';
import MainPage from './components/MainPage';
import RadioButtonsGroup from './components/RadioButtonsGroup';

export default function App() {
  const [birthDate, setBirthDate] = useState(dayjs(null));
  const [weeksLived, setWeeksLived] = useState(null);
  const [totalWeeks, setTotalWeeks] = useState(0);
  const [gender, setGender] = useState("");




  const handleChange = (newValue) => setBirthDate(newValue);

  const handleCalculateWeeks = (e) => {
    console.log('gendewerdgfwr', gender)
    e.preventDefault();
    const dob = new Date(birthDate);
    const now = new Date();
    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    const weeks = Math.floor((now - dob) / millisecondsPerWeek);
    setWeeksLived(weeks);
    if (gender === 'male') {
      setTotalWeeks(3874)
    } else if (gender === 'female') {
      setTotalWeeks(4170)
    } else if (gender === 'other') {
      setTotalWeeks(4000)
    }
  }








  return (
    <div className='App'>
      <h1>Your Life In Weeks</h1>

      {isNaN(birthDate.$y) || gender === '' &&
        <h3>Enter your Birthday and Gender to Get Started!</h3>
      }
      <div className="startingContainer">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={birthDate}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />

          </Stack>
        </LocalizationProvider>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <RadioButtonsGroup onSetGender={setGender} />
          <Button
            className='button'
            variant="contained"
            onClick={handleCalculateWeeks}
            disabled={isNaN(birthDate.$y) || gender === ''}
          >
            Populate Weeks
          </Button>
        </div>

      </div>
      {weeksLived !== null && (
        <p>You have lived for {weeksLived} weeks.</p>
      )}
      <MainPage
        birthYear={birthDate.$y}
        weeksLived={weeksLived}
        totalWeeks={totalWeeks}
      />
    </div>

  );
}