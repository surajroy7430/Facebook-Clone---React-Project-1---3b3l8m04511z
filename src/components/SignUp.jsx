import { 
    Button, 
    Container, 
    CssBaseline, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    Grid, 
    MenuItem, 
    Radio, 
    RadioGroup, 
    Select, 
    TextField, 
    Typography
} from '@material-ui/core';
import React, { useState } from 'react';


const SignUp = () => {
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
    }
    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    }
    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    }
  return (
    <div>
        <CssBaseline />
        <Container maxWidth="sm" align='center'>
            <div align="left">
                <Typography variant='h4'>Sign Up</Typography>
                <Typography variant='p'>It's quick and easy.</Typography>
            </div>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            required
                            label="First Name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            required
                            label="Last Name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            required
                            label="Email Address"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            required
                            label="Password"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {/* <DobFormControl 
                            selectedDay={selectedDay}
                            selectedMonth={selectedMonth}
                            selectedYear={selectedYear}
                            handleDayChange={handleDayChange}
                            handleMonthChange={handleMonthChange}
                            handleYearChange={handleYearChange}
                        /> */}
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel required component='legend'>Gender</FormLabel>
                            <RadioGroup style={{display: 'flex', flexDirection: 'row'}}>
                                <FormControlLabel xs='4' value='male' control={<Radio />} label='Male' />
                                <FormControlLabel xs='4' value='female' control={<Radio />} label='Female' />
                                <FormControlLabel xs='4' value='other' control={<Radio />} label='Other' />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} align='left'>
                        <Typography variant='small'>
                            People who use our service may have uploaded your contact information to Facebook. <a href='#'>Learn more</a>.
                        </Typography>
                        <br/>
                        <Typography variant='small'>
                            By clicking Sign Up, you agree to our <a href='#'>Terms</a>, <a href='#'>Privacy Policy</a> and <a href='#'>Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' color='secondary'>Sign Up</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    </div>
  )
}

const DobFormControl = ({
    selectedDay, 
    selectedMonth, 
    selectedYear, 
    handleDayChange, 
    handleMonthChange, 
    handleYearChange, 
}) => {
    const daysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
    }
    const generateDays = () => {
        if(selectedMonth && selectedYear){
            const numDays = daysInMonth(selectedMonth, selectedYear);
            return Array.from({length: numDays}, (_, index) => index+1);
        }
        return [];
    }
  return (
    <FormControl fullWidth>
        <FormLabel>Date Of Birth</FormLabel>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Select value={selectedDay} onChange={handleDayChange}>
                    <MenuItem>Day</MenuItem>
                    {generateDays.map((day) => (
                        <MenuItem key={day} value={day}>{day}</MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item xs={4}>
                <Select value={selectedMonth} onChange={handleMonthChange}>
                    <MenuItem>Month</MenuItem>
                    {Array.form({length: 12}, (_, index) => (
                        <MenuItem key={index} value={index+1}>{index+1}</MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item xs={4}>
                <Select value={selectedYear} onChange={handleYearChange}>
                    <MenuItem>Year</MenuItem>
                    {Array.from({length: new Date().getFullYear() - 1899}, (_, index) => (
                        <MenuItem key={index} value={new Date().getFullYear() - index}>
                            {new date().getFullYear() - index}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
        </Grid>
    </FormControl>
  )
}

export default SignUp
