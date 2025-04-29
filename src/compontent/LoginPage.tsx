import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../commonPage/Common.scss';
import { Button, Grid, TextField, IconButton } from '@mui/material';
import LogoImage from "../../src/commonPage/Images/Ai.png";
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const Navigate = useNavigate();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must contain at least 8 characters, including a number and a symbol');
      return;
    }
    setError('');
    Navigate('/home');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container flex align-center h-[300px] bg-red-200 context">
      <Grid container className="area_Content">
        <Grid className="circles_content" >
<div className='Round_content'></div>
<div className='Round_content'></div>
<div className='Round_content'></div>
<div className='Round_content'></div>
<div className='Round_content'></div>
<div className='Round_content'></div>
<div className='Round_content'></div>
<div className='Round_content'></div>
<div className='Round_content'></div>

                  
        </Grid>
        <Grid size={{ xs: 12, sm: 12  , md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { xs: 2, md: 0}, height:{xs: "50%", md: '100%'} }}>
          <img src={LogoImage} alt="LogoImage" style={{ maxWidth: '100%', maxHeight: '100%' }}/>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6  }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <form onSubmit={handleSubmit}>
            <Grid sx={{ fontSize: 'xx-large', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>Login</Grid>
            <Grid  className='login_lable' sx={{ mt: { xs: 0, md: 2} }}>
              <div className='mt-[10px]'>
              <TextField
              sx={{ width: "400px"}}
                id="outlined-basic"
                type='email'
                placeholder='Enter your Email Id'
                value={email}
                label="Enter your Email Id"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              </div>
            </Grid>
            <Grid sx={{ mt: 1, position: 'relative' }}>
              <TextField
              sx={{ width: "400px"}}

                id="outlined-basic"
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                value={password}
                label="Enter your password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <IconButton
                onClick={handleClickShowPassword}
                sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
              >
                {/* {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />} */}
              </IconButton>
            </Grid>
            <Grid sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <Button type="submit" sx={{border:'1px solid gray', width:"100px"}}>Login</Button>
              {error && <p className="error">{error}</p>}
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
