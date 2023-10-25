import React, { useEffect, useState } from 'react'
import './styles/SignUp.css';
import {
  FormControl,
  Input,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
  });

  const handleInputChange = (e) => {
    setFormData(
      { 
        ...formData, 
        [e.target.name]: e.target.value 
      }
    );
  };

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const navigate = useNavigate();

  const monthNames = [
    'Month',
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ]

  // Helper function to generate options for days, months, and years
  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  // Generate options for days based on the selected month and year
  const generateDays = (selectedMonth, selectedYear) => {
    if (selectedMonth === 0 || selectedYear === 0) {
      return [<MenuItem key="empty" value="">Day</MenuItem>];
    }
  
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, index) => index + 1).map((day) => (
      <MenuItem key={day} value={day}>
        {day}
      </MenuItem>
    ));
  };

  useEffect(() => {
    setSelectedDay('');
  }, [selectedMonth, selectedYear]);

  return (
    <div className='signup-main-container'>
      <div className="signup-content">
        <img
          className="signup-logo"
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="facebook_logo"
        />
      </div>
      <Grid container justifyContent="center" className="signup-main">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Card elevation={4} className="signup-card">
          <CardContent>
              <Typography variant="h5">Create a new account</Typography>
              <Typography variant="subtitle1">It's quick and easy.</Typography>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Create Password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel style={{textAlign: 'left'}}>Date of Birth</InputLabel>
                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        <FormControl fullWidth variant="outlined">
                        <Select
                        label="Day"
                        name="selectedDay"
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}
                      >
                        {generateDays(selectedMonth, selectedYear)}
                      </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                        <FormControl fullWidth variant="outlined">
                        <Select
                        label="Month"
                        name="selectedMonth"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                      >
                        {monthNames.map((monthName, i) => (
                          <MenuItem key={i} value={i}>
                            {monthName}
                          </MenuItem>
                        ))}
                      </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                        <FormControl fullWidth variant="outlined">
                        <Select
                        label="Year"
                        name="selectedYear"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                      >
                        {Array.from({ length: 2024 - 1905 + 1 }, (_, index) => 1905 + index).map((year) => (
                          <MenuItem key={year} value={year}>
                            {year}
                          </MenuItem>
                        ))}
                      </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Gender</InputLabel>
                      <Select
                        label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="signup-button"
                    >
                      Sign Up
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      <Link to="/login">Already have an account?</Link>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </div>
    // <div id='signup-main'>
    //   <div className='fb-logo'>
    //       <img className='signup-logo' 
    //           src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' 
    //           alt='facebook_logo' 
    //       />
    //   </div>

    //   <div id='signup'>
    //     <div className='signup-info'>
    //       <h1>Sign Up</h1>
    //       <p>It's quick and easy.</p>
    //     </div>

    //     <div className='signup-outer'>
    //       <div className='signup-container'>
    //         <form>
    //           <div id='signup-input-fields'>
    //             <div className='fullname-field'>
    //               <input 
    //                 type="text" 
    //                 name="firstname" 
    //                 id="firstname" 
    //                 placeholder='First Name' 
    //                 required
    //               />
    //               <input 
    //                 type="text" 
    //                 name="lastname" 
    //                 id="lastname" 
    //                 placeholder='Last Name' 
    //                 required
    //               />
    //             </div>
    //             <div className='signup-email'>
    //               <input 
    //                 type="text" 
    //                 name="email" 
    //                 id="email" 
    //                 placeholder='Email Address' 
    //                 required 
    //               />
    //             </div>
    //             <div className='signup-password'>
    //               <input 
    //                 type="text" 
    //                 name="password" 
    //                 id="password" 
    //                 placeholder='Create Password' 
    //                 required
    //               />
    //             </div>
    //           </div>

    //           <div id='birthday-wrapper'>
    //             <h5>Date Of Birth</h5>
    //             <div className='dob'>
    //               <select 
    //                 name="day" 
    //                 id="day" 
    //                 title='Day' 
    //                 required 
    //                 value={selectedDay} 
    //                 onChange={handleDayChange}
    //               >
    //                 <option value="">Day</option>
    //                 {generateDays()}
    //               </select>
    //               <select 
    //                 name="month" 
    //                 id="month" 
    //                 title='Month' 
    //                 required 
    //                 value={selectedMonth} 
    //                 onChange={handleMonthChange}
    //               >
    //                 {monthNames.map((monthName, i) => (
    //                   <option key={i} value={i}>
    //                     {monthName}
    //                   </option>
    //                 ))};
    //               </select>
    //               <select 
    //                 name="year" 
    //                 id="year" 
    //                 title='Year' 
    //                 required 
    //                 value={selectedYear} 
    //                 onChange={handleYearChange}
    //               >
    //                 <option value="">Year</option>
    //                 {generateOptions(1905, 2023)}
    //               </select>
    //             </div>
    //           </div>

    //           <div id='gender-wrapper'>
    //             <h5>Gender</h5>
    //             <span className='gender'>
    //               <label htmlFor="female" class="gender-field">Female
    //                 <input type="radio" class="gender-input" name="sex" id="female" required/>
    //               </label>
    //               <label htmlFor="male" class="gender-field">Male
    //                 <input type="radio" class="gender-input" name="sex" id="male" required/>
    //               </label>
    //               <label htmlFor="other" class="gender-field">Other
    //                 <input type="radio" class="gender-input" name="sex" id="other" required/>
    //               </label>
    //             </span>
    //           </div>

    //           <div className='policy'>
    //             <p>
    //               People who use our service may have uploaded your contact information to Facebook.&nbsp;
    //               <a>Learn more</a>.
    //             </p>
    //           </div>

    //           <div className='policy'>
    //             <p>
    //               By clicking Sign Up, you agree to our&nbsp;
    //               <a>Terms</a>, <a>Privacy Policy</a> and <a>Cookies Policy</a>. 
    //               You may receive SMS notifications from us and can opt out at any time.
    //             </p>
    //           </div>

    //           <div className='signup-button-holder'>
    //             <button 
    //               type="submit" 
    //               className='signup-button'
    //             >
    //               Sign Up
    //             </button>
    //           </div>

    //           <div className='to-login'>
    //             Already have an account?&nbsp;
    //             <Link to='/login'>Login here</Link>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SignUp

