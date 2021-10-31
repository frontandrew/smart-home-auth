import { Grid, Typography } from '@mui/material'

import { AuthForm } from '../../features'
import { AuthLogo } from '../../resorses'

export const AuthPage = () => {
  return (
  <Grid container >
    <Grid item>
      <img src={AuthLogo} alt="ЛИВИКОМ Ваш умный дом" />
    </Grid>
    <Grid item>
      <AuthForm />
    </Grid>
  </Grid>
)}