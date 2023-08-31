import { 
    Button,
    Container, 
    CssBaseline, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    Grid, 
    Radio, 
    RadioGroup,  
    TextField, 
    Typography 
} from '@mui/material';


const SignUp = () => {
    
  return (
    <div id='signup-container'>
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
                        <TextField fullWidth type='date' />
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

export default SignUp
