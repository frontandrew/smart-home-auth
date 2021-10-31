import { Grid, Typography, useMediaQuery } from '@mui/material'

import { AuthForm } from '../../features'
import { AuthLogo } from '../../resorses'
import { useStyles } from './styles'


export const AuthPage = () => {
  const isMobile = useMediaQuery('(max-width:1080px)')
  const { box, plug, form, plug_logo } = useStyles({ isMobile })
  return (
  <main className={box}>
    <div className={plug}>
      <img  className={plug_logo} src={AuthLogo} alt="ЛИВИКОМ Ваш умный дом" />
    </div>
    <div className={form}>
      <AuthForm />
    </div>
  </main>
)}