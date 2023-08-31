import { WidthFull } from '@mui/icons-material';
import { 
    Button,
    Container, 
    CssBaseline, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    Grid, 
    // MenuItem, 
    Radio, 
    RadioGroup, 
    // Select, 
    TextField, 
    Typography 
} from '@mui/material';
// import makeStyles from '@mui/material';
// import React, { useState } from 'react';


const SignUp = () => {
    // const [selectedDay, setSelectedDay] = useState('');
    // const [selectedMonth, setSelectedMonth] = useState('');
    // const [selectedYear, setSelectedYear] = useState('');

    // const handleDayChange = (e) => {
    //     setSelectedDay(e.target.value);
    // }
    // const handleMonthChange = (e) => {
    //     setSelectedMonth(e.target.value);
    // }
    // const handleYearChange = (e) => {
    //     setSelectedYear(e.target.value);
    // }
  return (
    <div>
        <CssBaseline />
        <Container maxWidth="xs" align='center' className='container'>
            <div align="left" className='signupHeader'>
                <Typography variant='h4'>Sign Up</Typography>
                <Typography variant='p'>It's quick and easy.</Typography>
            </div>
            <form id='formContainer'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            label=""
                            focused
                            fullWidth
                            placeholder='First Name'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            label=""
                            fullWidth
                            placeholder='Last Name'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            label=""
                            type={'email'}
                            fullWidth
                            placeholder='Email Address'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            label=""
                            fullWidth
                            placeholder='Password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormLabel align='left' component='legend'>Date of Birth</FormLabel>
                        <TextField type='date' />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component='legend'>Gender</FormLabel>
                            <RadioGroup style={{display: 'flex', flexDirection: 'row'}}>
                                <FormControlLabel className='maleRadio' value='male' control={<Radio />} label='Male' labelPlacement='start' />
                                <FormControlLabel className='femaleRadio' value='female' control={<Radio />} label='Female' labelPlacement='start' />
                                <FormControlLabel className='otherRadio' value='other' control={<Radio />} label='Other' labelPlacement='start' />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} align='left'>
                        <small>
                            People who use our service may have uploaded your contact information to Facebook. Learn more.
                        </small>
                        <br/>
                        <small>
                            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
                        </small>
                    </Grid>
                    <Grid item xs={12}>
                        <Button style={{padding: '7px 46px'}} variant='contained' color='success'>Sign Up</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    </div>
  )
}

// const DobFormControl = ({
//     selectedDay, 
//     selectedMonth, 
//     selectedYear, 
//     handleDayChange, 
//     handleMonthChange, 
//     handleYearChange, 
// }) => {
//     const daysInMonth = (year, month) => {
//         return new Date(year, month, 0).getDate();
//     }
//     const generateDays = () => {
//         if(selectedMonth && selectedYear){
//             const numDays = daysInMonth(selectedMonth, selectedYear);
//             return Array.from({length: numDays}, (_, index) => index+1);
//         }
//         return [];
//     }
//   return (
//     <FormControl fullWidth>
//         <FormLabel>Date Of Birth</FormLabel>
//         <Grid container spacing={2}>
//             <Grid item xs={4}>
//                 <Select value={selectedDay} onChange={handleDayChange}>
//                     <MenuItem>Day</MenuItem>
//                     {generateDays.map((day) => (
//                         <MenuItem key={day} value={day}>{day}</MenuItem>
//                     ))}
//                 </Select>
//             </Grid>
//             <Grid item xs={4}>
//                 <Select value={selectedMonth} onChange={handleMonthChange}>
//                     <MenuItem>Month</MenuItem>
//                     {Array.form({length: 12}, (_, index) => (
//                         <MenuItem key={index} value={index+1}>{index+1}</MenuItem>
//                     ))}
//                 </Select>
//             </Grid>
//             <Grid item xs={4}>
//                 <Select value={selectedYear} onChange={handleYearChange}>
//                     <MenuItem>Year</MenuItem>
//                     {Array.from({length: new Date().getFullYear() - 1899}, (_, index) => (
//                         <MenuItem key={index} value={new Date().getFullYear() - index}>
//                             {new Date().getFullYear() - index}
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </Grid>
//         </Grid>
//     </FormControl>
//   )
// }

export default SignUp
