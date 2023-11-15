import React, { useEffect, useState } from 'react'
import './styles/SignUp.css';
import {
  FormControl,
  Input,
  Divider,
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
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signupAuth } from '../../utils/APIs';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUserInfo(
      { 
        ...userInfo, 
        [name]: value 
      }
    );
  };

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const monthNames = [
    'Month',
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ]

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

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signupAuth(userInfo, navigate);
      setUserInfo({
        name: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
      })
    } catch (error) {
      // console.error(error);
      toast.error(error);
    }
  }

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
              <Typography variant="h5" style={{fontWeight: 'bold'}}>Create a new account</Typography>
              <Typography variant="subtitle1">It's quick and easy.</Typography>
              <Divider style={{margin: '15px 0'}} />
              <form onSubmit={handleSignUp}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder='First Name'
                        value={userInfo.name}
                        onChange={handleInputChange}
                        disableUnderline
                        style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '7px' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        placeholder='Last Name'
                        value={userInfo.lastName}
                        onChange={handleInputChange}
                        disableUnderline
                        style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '7px' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder='Email Address'
                        value={userInfo.email}
                        onChange={handleInputChange}
                        disableUnderline
                        style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '7px' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <Input
                        id="password"
                        name="password"
                        type="text"
                        required
                        placeholder='Create Password'
                        value={userInfo.password}
                        onChange={handleInputChange}
                        disableUnderline
                        style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '7px' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel style={{textAlign: 'left'}}>Date of Birth</InputLabel>
                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel>Day</InputLabel>
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
                          <InputLabel>Month</InputLabel>
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
                          <InputLabel>Year</InputLabel>
                          <Select
                            label="Year"
                            name="selectedYear"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                          >
                            {Array.from({ length: 2018 - 1970 + 1 }, (_, index) => 1970 + index).map((year) => (
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
                    <InputLabel style={{textAlign: 'left'}}>Gender</InputLabel>
                    <FormControl fullWidth variant="outlined">
                      <RadioGroup
                        row
                        name="gender"
                        value={userInfo.gender}
                        onChange={handleInputChange}
                      >
                        <Grid item xs={4}>
                          <FormControlLabel
                            value="female"
                            control={<Radio color="primary" />}
                            label="Female"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <FormControlLabel
                            value="male"
                            control={<Radio color="primary" />}
                            label="Male"
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <FormControlLabel
                            value="other"
                            control={<Radio color="primary" />}
                            label="Other"
                          />
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Typography variant='div' className='policy'>
                    <Typography>
                      People who use our service may have uploaded your contact information to Facebook.&nbsp;
                      <a>Learn more</a>.
                    </Typography>
                  </Typography>
                  <Typography variant='div' className='policy'>
                    <Typography>
                      By clicking Sign Up, you agree to our&nbsp;
                      <a>Terms</a>, <a>Privacy Policy</a> and <a>Cookies Policy</a>. 
                      You may receive SMS notifications from us and can opt out at any time.
                    </Typography>
                  </Typography>

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
                    <Typography className='to-login'>
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
  )
}

export default SignUp

