import { colors } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => {
  const { spacing, palette } = theme

  console.log('THEME: ', { colors, theme })
  return {
    box: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: ({ tablet }) => (tablet ? 'column' : 'row'),
    },
    plug: {
      display: 'flex',
      padding: spacing(6),
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      maxWidth: ({ tablet }) => (tablet ? '200px' : 'max-content'),
      width: '100%',
    },
    form: {
      height: '100%',
      background: colors.teal[50],
      padding: spacing(6),
    },
    header: {
      padding: spacing(3),
    },
    copy: {
      color: palette.text.disabled,
      position: 'absolute',
      bottom: 2,
      right: 4,
    },
  }
})
