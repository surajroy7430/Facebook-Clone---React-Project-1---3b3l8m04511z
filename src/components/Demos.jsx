import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

export default Demos = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male'); // Default gender
  const [formErrors, setFormErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSignup = () => {
    const errors = {};

    if (!firstName) {
      errors.firstName = 'First name is required';
    }

    if (!lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (!selectedYear || !selectedMonth || !selectedDay) {
      errors.dob = 'Date of Birth is required';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Save user info to local storage
      const userInfo = {
        firstName,
        lastName,
        email,
        password,
        gender,
        dob: `${selectedYear}-${selectedMonth}-${selectedDay}`,
      };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      setShowSuccessMessage(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={!!formErrors.firstName}
              helperText={formErrors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={!!formErrors.lastName}
              helperText={formErrors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!formErrors.password}
              helperText={formErrors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup value={gender} onChange={handleGenderChange}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <DOBFormControl
              selectedYear={selectedYear}
              selectedMonth={selectedMonth}
              selectedDay={selectedDay}
              handleYearChange={handleYearChange}
              handleMonthChange={handleMonthChange}
              handleDayChange={handleDayChange}
              formErrors={formErrors}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSignup}>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
      {showSuccessMessage && (
        <div>
          <p>Signup successful!</p>
          <p>Your information has been saved.</p>
        </div>
      )}
    </Container>
  );
}

function DOBFormControl({
  selectedYear,
  selectedMonth,
  selectedDay,
  handleYearChange,
  handleMonthChange,
  handleDayChange,
  formErrors,
}) {
  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const generateDays = () => {
    if (selectedYear && selectedMonth) {
      const numDays = daysInMonth(selectedMonth, selectedYear);
      return Array.from({ length: numDays }, (_, index) => index + 1);
    }
    return [];
  };

  return (
    <FormControl fullWidth error={!!formErrors.dob}>
      <FormLabel>Date of Birth</FormLabel>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Select value={selectedYear} onChange={handleYearChange}>
            <MenuItem value="">{/* Placeholder */}</MenuItem>
            {/* Generate year options */}
            {Array.from({ length: new Date().getFullYear() - 1899 }, (_, index) => (
              <MenuItem key={index} value={new Date().getFullYear() - index}>
                {new Date().getFullYear() - index}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <Select value={selectedMonth} onChange={handleMonthChange}>
            <MenuItem value="">{/* Placeholder */}</MenuItem>
            {/* Generate month options */}
            {Array.from({ length: 12 }, (_, index) => (
              <MenuItem key={index} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <Select value={selectedDay} onChange={handleDayChange}>
            <MenuItem value="">{/* Placeholder */}</MenuItem>
            {/* Generate day options based on selected year and month */}
            {generateDays().map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      {formErrors.dob && <div>{formErrors.dob}</div>}
    </FormControl>
  );
}
