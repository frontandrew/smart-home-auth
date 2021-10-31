import { makeStyles } from '@mui/styles'
import { colors } from '@mui/material'

export const useStyles = makeStyles(({ palette, spacing }) => ({
  box: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
  },
  plug: {
    display: ({ isMobile }) => isMobile ? 'none' : 'flex',    
    padding: spacing(6),
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  plug_logo: {
    maxWidth: 'max-content',
    width: '100%',
  },
  form: {
    width: ({ isMobile }) => isMobile ? '100%' :'min-content',
    height: '100%',    
    background: colors.teal[50],
    padding: spacing(6),
  },
}))