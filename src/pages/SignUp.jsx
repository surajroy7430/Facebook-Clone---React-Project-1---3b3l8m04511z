import React, { useEffect, useState } from 'react'
import '../styles/SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  // Helper function to generate options for days, months, and years
  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  // Generate options for days based on the selected month and year
  const generateDays = () => {
    const month = parseInt(selectedMonth, 10);
    const year = parseInt(selectedYear, 10);

    if (month === 0 || year === 0) {
      return [<option key="empty" value="">Day</option>];
    }

    const daysInMonth = new Date(year, month, 0).getDate();
    return generateOptions(1, daysInMonth);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  useEffect(() => {
    setSelectedDay('');
  }, [selectedMonth, selectedYear]);

  const handleSignUp = (e) => {
    e.preventDefault();
}
  return (
    <div id='signup-main'>
      <div className='fb-logo'>
          <img className='signup-logo' 
              src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' 
              alt='facebook_logo' 
          />
      </div>

      <div id='signup'>
        <div className='signup-info'>
          <h1>Sign Up</h1>
          <p>It's quick and easy.</p>
        </div>

        <div className='signup-outer'>
          <div className='signup-container'>
            <form>
              <div id='signup-input-fields'>
                <div className='fullname-field'>
                  <input 
                    type="text" 
                    name="firstname" 
                    id="firstname" 
                    placeholder='First Name' 
                    required
                  />
                  <input 
                    type="text" 
                    name="lastname" 
                    id="lastname" 
                    placeholder='Last Name' 
                    required
                  />
                </div>
                <div className='signup-email'>
                  <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='Email Address' 
                    required 
                  />
                </div>
                <div className='signup-password'>
                  <input 
                    type="password" 
                    name="" 
                    id="" 
                    placeholder='Create Password' 
                    required
                  />
                </div>
              </div>

              <div id='birthday-wrapper'>
                <h5>Date Of Birth</h5>
                <div className='dob'>
                  <select name="day" id="day" title='Day' required value={selectedDay} onChange={handleDayChange}>
                    <option value="">Day</option>
                    {generateDays()}
                  </select>
                  <select name="month" id="month" title='Month' required value={selectedMonth} onChange={handleMonthChange}>
                    <option value="">Month</option>
                    {generateOptions(1, 12)}
                  </select>
                  <select name="year" id="year" title='Year' required value={selectedYear} onChange={handleYearChange}>
                    <option value="">Year</option>
                    {generateOptions(1905, 2023)}
                  </select>
                </div>
              </div>

              <div id='gender-wrapper'>
                <h5>Gender</h5>
                <span className='gender'>
                  <label htmlFor="female" class="gender-field">Female
                    <input type="radio" class="gender-input" name="sex" id="female" required/>
                  </label>
                  <label htmlFor="male" class="gender-field">Male
                    <input type="radio" class="gender-input" name="sex" id="male" required/>
                  </label>
                  <label htmlFor="other" class="gender-field">Other
                    <input type="radio" class="gender-input" name="sex" id="other" required/>
                  </label>
                </span>
              </div>

              <div className='policy'>
                <p>
                  People who use our service may have uploaded your contact information to Facebook.&nbsp;
                  <a>Learn more</a>.
                </p>
              </div>

              <div className='policy'>
                <p>
                  By clicking Sign Up, you agree to our&nbsp;
                  <a>Terms</a>, <a>Privacy Policy</a> and <a>Cookies Policy</a>. 
                  You may receive SMS notifications from us and can opt out at any time.
                </p>
              </div>

              <div className='signup-button-holder'>
                <button 
                  type="submit" 
                  className='signup-button' 
                  // onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>

              <div className='to-login'>
                Already have an account?&nbsp;
                <Link to='/login'>Login here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp

