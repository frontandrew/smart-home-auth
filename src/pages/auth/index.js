import { useMediaQuery, AppBar, colors, Typography } from '@mui/material'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import { AuthForm } from '../../features'
import { AuthLogo } from '../../resorses'
import { useStyles } from './styles'


const AuthPage = () => {
  const tablet = useMediaQuery('(max-width:1080px)')
  const desktop = useMediaQuery('(min-width:1081px)')
  const { box, plug, form, logo, header, copy } = useStyles({ tablet })

  const currentYear = format(new Date(), 'yyyy')

  const Logo = <img  className={logo} src={AuthLogo} alt="ЛИВИКОМ Ваш умный дом" />
  
  const AuthPlug = desktop
    ? <div className={plug}>
        {Logo}
      </div>
    : null

  const AuthHead = tablet
    ? <AppBar
        sx={{ backgroundColor: colors.common.white }}
        className={header}
        position="static"
      >
        {Logo}
      </AppBar>
    : null
      

  return (
  <main className={box}>
    {AuthPlug}
    {AuthHead}
    <div className={form}>
      <AuthForm />
    </div>
    <Typography variant='body1' className={copy}>
      <span>&#169;</span>
      <span>{` UJIN | ${currentYear}`}</span>
    </Typography>
  </main>
)}

export { AuthPage as default }